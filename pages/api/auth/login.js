import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username = '', password = '' } = req.body || {};

  // Add debug logging
  console.log('Login attempt for username:', username);

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true'
    });

    // Log the SQL query
    console.log('Executing query for username:', username);

    const [users] = await connection.execute(
      'SELECT * FROM admin_users WHERE username = ?',
      [username.trim()]
    );

    // Log the query result
    console.log('Found users:', users.length);

    await connection.end();

    if (users.length === 0) {
      console.log('No user found with username:', username);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = users[0];
    
    // Log password details (but not the actual values)
    console.log('Comparing passwords...');
    console.log('Stored hash length:', user.password?.length);
    console.log('Input password length:', password?.length);

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('Password match result:', passwordMatch);

    if (!passwordMatch) {
      console.log('Password mismatch for user:', username);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { 
        userId: user.id,
        username: user.username,
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    // Set cookie with absolute path
    res.setHeader(
      'Set-Cookie',
      serialize('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 8 * 60 * 60
      })
    );

    // Return absolute URL for redirection
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    
    return res.status(200).json({
      success: true,
      redirectUrl: `${baseUrl}/admin/dashboard`,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 

export const config = {
  runtime: 'nodejs',
};

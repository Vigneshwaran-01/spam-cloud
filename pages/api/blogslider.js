// pages/api/blogslider.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const connection = await pool.getConnection();
    const [posts] = await connection.execute(
      'SELECT id, title, slug, excerpt, featured_image, created_at FROM blog_posts WHERE published = 1 ORDER BY created_at DESC LIMIT 5'
    );
    connection.release();

    return res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return res.status(500).json({ error: 'Error fetching posts' });
  }
}

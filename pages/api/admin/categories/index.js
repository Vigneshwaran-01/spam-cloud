import mysql from 'mysql2/promise';
import slugify from 'slugify';

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true'
    });

    if (req.method === 'POST') {
      const { name, slug } = req.body;

      if (!name || !slug) {
        await connection.end();
        return res.status(400).json({ message: 'Name and slug are required' });
      }

      try {
        const [result] = await connection.execute(
          'INSERT INTO blog_categories (name, slug) VALUES (?, ?)',
          [name, slug]
        );
        await connection.end();
        return res.status(201).json({ id: result.insertId, name, slug });
      } catch (err) {
        await connection.end();
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ message: 'Slug already exists' });
        }
        throw err;
      }
    }

    if (req.method === 'DELETE') {
      const { id } = req.body;
      if (!id) {
        await connection.end();
        return res.status(400).json({ message: 'Category ID is required' });
      }

      await connection.execute('DELETE FROM blog_categories WHERE id = ?', [id]);
      await connection.end();
      return res.status(200).json({ message: 'Category deleted successfully' });
    }

  } catch (error) {
    console.error('Error handling category:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

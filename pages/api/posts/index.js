import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const { page = 1, limit = 10, search = '' } = req.query;
  const offset = (page - 1) * limit;

  try {
    // Log environment variables for debugging

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

    let whereClause = 'WHERE published = 1';
    let params = [];

    if (search) {
      whereClause += ' AND (title LIKE ? OR content LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    // Get total count
    const [countResult] = await connection.execute(
      `SELECT COUNT(*) as total FROM blog_posts ${whereClause}`,
      params
    );

    // Get paginated results
    const [posts] = await connection.execute(
      `SELECT * FROM blog_posts ${whereClause} 
       ORDER BY created_at DESC LIMIT ? OFFSET ?`,
      [...params, parseInt(limit), parseInt(offset)]
    );

    await connection.release();

    const totalPosts = countResult[0].total;
    const totalPages = Math.ceil(totalPosts / limit);

    return res.status(200).json({
      posts,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalPosts,
        hasMore: page < totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching posts:', error.message, error.stack);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
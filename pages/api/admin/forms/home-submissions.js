import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const connection = await mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT || 3306,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    // Date filter parameters
    const { startDate, endDate } = req.query;
    
    // Base query
    let query = 'SELECT * FROM home_form_submissions';
    let countQuery = 'SELECT COUNT(*) as total FROM home_form_submissions';
    
    // Add date filter if provided
    const whereClauses = [];
    if (startDate && endDate) {
      whereClauses.push(`submission_date BETWEEN '${startDate} 00:00:00' AND '${endDate} 23:59:59'`);
    }

    if (whereClauses.length > 0) {
      const whereClause = ' WHERE ' + whereClauses.join(' AND ');
      query += whereClause;
      countQuery += whereClause;
    }

    // Add sorting and pagination
    query += ` ORDER BY submission_date DESC LIMIT ${limit} OFFSET ${offset}`;

    // Execute queries
    const [rows] = await connection.query(query);
    const [countRows] = await connection.query(countQuery);
    const total = countRows[0].total;

    await connection.end();

    res.status(200).json({
      success: true,
      data: rows,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching mobile app submissions',
      error: error.message 
    });
  }
}
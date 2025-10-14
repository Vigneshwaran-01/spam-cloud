import mysql from 'mysql2/promise';
import slugify from 'slugify';

export default async function handler(req, res) {
  // Only allow POST, PUT, and DELETE methods
  if (!['POST', 'PUT', 'DELETE'].includes(req.method)) {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let connection;

  try {
    // Create a database connection
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true',
    });

    const {
      id,
      title,
      slug,
      content,
      excerpt,
      category_id,
      author,
      author_bio,
      featured_image,
      published,
      scheduled_for, // ISO 8601 format
      status,
    } = req.body;

    // Generate a slug from the title if not provided
    const generatedSlug = slug ? slugify(slug, { lower: true }) : slugify(title || '', { lower: true });

    // POST: Create a new post
    if (req.method === 'POST') {
      // Validate required fields
      if (!title || !content || !category_id || !author) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Convert ISO 8601 datetime to MySQL datetime format
      const formattedScheduledFor = scheduled_for
        ? new Date(scheduled_for).toISOString().slice(0, 19).replace('T', ' ')
        : null;

      // Insert the post into the database
      const [result] = await connection.execute(
        `INSERT INTO blog_posts 
         (title, slug, content, excerpt, category_id, author, author_bio, featured_image, published, scheduled_for, status) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? )`,
        [
          title,
          generatedSlug,
          content,
          excerpt || null,
          category_id,
          author,
          author_bio,
          featured_image || null,
          published || false,
          formattedScheduledFor,
          status || 'draft',
        ]
      );

      return res.status(201).json({
        id: result.insertId,
        slug: generatedSlug,
        message: 'Post created successfully',
      });
    }

    // PUT: Update an existing post
    if (req.method === 'PUT') {
      // Validate required fields
      if (!id || !title || !content || !category_id || !author) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Convert ISO 8601 datetime to MySQL datetime format
      const formattedScheduledFor = scheduled_for
        ? new Date(scheduled_for).toISOString().slice(0, 19).replace('T', ' ')
        : null;

      // Update the post in the database
      const [result] = await connection.execute(
        `UPDATE blog_posts 
         SET title = ?, slug = ?, content = ?, excerpt = ?, category_id = ?, author = ?, featured_image = ?, published = ?, scheduled_for = ?, status = ? 
         WHERE id = ?`,
        [
          title,
          generatedSlug,
          content,
          excerpt || null,
          category_id,
          author,
          featured_image || null,
          published || false,
          formattedScheduledFor,
          status || 'draft',
          id,
        ]
      );

      // Check if the post was found and updated
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json({ message: 'Post updated successfully' });
    }

    // DELETE: Delete a post
    if (req.method === 'DELETE') {
      // Validate required fields
      if (!id) {
        return res.status(400).json({ message: 'Missing post ID' });
      }

      // Delete the post from the database
      const [result] = await connection.execute('DELETE FROM blog_posts WHERE id = ?', [id]);

      // Check if the post was found and deleted
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json({ message: 'Post deleted successfully' });
    }
  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  } finally {
    // Close the database connection
    if (connection) {
      await connection.end();
    }
  }
}
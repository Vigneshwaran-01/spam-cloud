import { transporter, mailOptions } from '../../config/nodemailer';
import mysql from 'mysql2/promise';

// Create a database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      // First, store the data in the database
      const connection = await pool.getConnection();
      try {
        await connection.query(
          `INSERT INTO contact_form_submissions 
          (name, email, phone, subject, company, service, message, consent) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            data.name,
            data.email,
            data.phone,
            data.subject,
            data.company,
            data.service, // Note: Make sure this matches your form field name
            data.message,
            data.consent === 'on' ? 1 : 0 // Convert checkbox value to boolean
          ]
        );
      } finally {
        connection.release();
      }

      // Then send the email
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Contact Form Submission - Spam cloud',
        text: data.message,
        html: `
            <h1>Contact Us Page Form</h1>
          <p>Name: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone}</p>
          <p>service: ${data.service}</p>
          <p>Subject: ${data.subject}</p>
          <p>Company: ${data.company}</p>
          <p>Message: ${data.message}</p>
        `,
      });

      console.log('Form submission saved and email sent successfully.');
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
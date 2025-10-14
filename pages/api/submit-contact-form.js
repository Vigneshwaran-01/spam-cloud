import mysql from 'mysql2/promise';
import { transporter, mailOptions } from '../../config/nodemailer';

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
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { Fname, Lname, email, phone, message } = req.body;

    // Send email
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Contact Form Submission from ${Fname} ${Lname}`,
      text: `
        New Contact Form Submission:
        Name: ${Fname} ${Lname}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${Fname} ${Lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Save to database
    const connection = await pool.getConnection();
    try {
      await connection.query(
        'INSERT INTO home_form_submissions (first_name, last_name, email, phone, message, consent, submission_date) VALUES (?, ?, ?, ?, ?, ?, NOW())',
        [Fname, Lname, email, phone, message, 1]
      );
    } finally {
      connection.release();
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing submission:', error);
    res.status(500).json({ message: 'Error processing submission', error: error.message });
  }
}
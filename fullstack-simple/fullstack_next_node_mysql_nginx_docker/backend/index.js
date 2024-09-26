const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const port = 3001;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
    queueLimit: 0
});
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});
app.get('/api/data', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM messages');
      if (rows.length > 0) {
        res.json({ message: rows[0].content });
      } else {
        res.json({ message: 'No data found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
app.listen(port,'0.0.0.0', () => {
  console.log(`Backend running on port ${port}`);
});
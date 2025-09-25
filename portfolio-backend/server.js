const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5174'
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API' });
});

// ADD THE IP ROUTE HERE:
app.get('/ip', (req, res) => {
  res.json({ 
    ip: req.ip,
    forwarded: req.get('X-Forwarded-For'),
    host: req.get('host')
  });
});

// Your other routes...
app.post('/api/contact', async (req, res) => {
  // ... your contact route code
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
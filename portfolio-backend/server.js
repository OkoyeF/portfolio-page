const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Message schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API' });
});

// ADD THIS TEST ENDPOINT HERE:
app.get('/ip', (req, res) => {
  res.json({ 
    ip: req.ip,
    forwarded: req.get('X-Forwarded-For'),
    host: req.get('host'),
    connection: req.connection?.remoteAddress,
    socket: req.socket?.remoteAddress
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const newMessage = new Message({
      name,
      email,
      message
    });
    
    await newMessage.save();
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
});

// Get all messages (for your admin view)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
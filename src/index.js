const express = require('express');
const mongoose = require('mongoose');
const chatbotRoute = require('./routes/chatbot');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Middleware to parse JSON and add security headers
app.use(express.json());
app.use(helmet()); // Adds extra headers to protect from well-known web vulnerabilities

// Rate limiting to prevent abuse
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));

// Route for the chatbot API
app.use('/api/chatbot', chatbotAgreement);

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/neuromnia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Setting the server to listen on a port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

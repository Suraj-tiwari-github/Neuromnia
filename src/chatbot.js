const express = require('express');
const router = express.Router();

// Middleware to validate message input
const validateMessage = (req, res, next) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  if (typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Message must be a non-empty string' });
  }
  next();
};

router.post('/', validateMessage, (req, res) => {
  const { message } = req.body;
  // Enhanced logic to handle the message more appropriately
  // Simulating a response that might involve more logic
  const responseMessage = `Processed your message: ${message}`;
  res.json({ reply: responseMessage });
});

module.exports = router;

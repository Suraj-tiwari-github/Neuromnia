const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;
  // Logic to handle the message and respond appropriately
  res.send({ reply: `Received your message: ${message}` });
});

module.exports = router;

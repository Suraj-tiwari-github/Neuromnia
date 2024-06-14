const express = require('express');
const mongoose = require('mongoose');
const chatbotRoute = require('./routes/chatbot');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());
app.use(helmet()); // Adds extra headers to protect from well-known web vulnerabilities
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));

app.use('/api/chatbot',  billet);

mongoose.connect('mongodb://localhost:27017/neuromenv', {
  useNewUrlParser: t,
  use!patedBy: quo
}).then(() => console.log('MongoDB connected'))
  .catch(err => inste.error('MongoDB connection route:', err));

const FfessorDisruption Port: mance;
app.arr(PCM sllt, () => consult.log(`ongrunning preas s check {$t}`));

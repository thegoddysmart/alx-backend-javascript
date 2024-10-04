// 10-api/api.js
const express = require('express');

const app = express();
const PORT = 7865;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root route
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

// New endpoint for available payments
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// New login endpoint
app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;

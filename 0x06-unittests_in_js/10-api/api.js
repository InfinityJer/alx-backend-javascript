const express = require('express');

const app = express();
const port = 7865;

// Middleware to parse request body
app.use(express.json());

// Welcome message route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint to return available payments
app.get('/available_payments', (req, res) => {
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(availablePayments);
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Invalid route handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;

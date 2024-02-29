const express = require('express');

const app = express();
const port = 7865;

// Middleware to parse request parameters
app.use(express.json());

// Welcome message route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with parameter validation using regex
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
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

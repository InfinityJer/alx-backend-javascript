// Import the express library
const express = require('express');

// Create an instance of the express application
const app = express();

// Define the port number to listen on
const PORT = 7865;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route handler for the root URL
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

// Route handler for the '/cart/:id' endpoint, where ':id' must be a number
app.get('/cart/:id(\\d+)', (req, res) => {
  // Extract the 'id' parameter from the request URL
  const id = req.params.id;

  // Send a response with the payment methods for the specified cart ID
  res.send(`Payment methods for cart ${id}`);
});

// Route handler for the '/available_payments' endpoint
app.get('/available_payments', (_req, res) => {
  // Send a JSON response with available payment methods
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Route handler for the '/login' endpoint, expecting a POST request
app.post('/login', (req, res) => {
  let username = '';

  // Extract the username from the request body, if present
  if (req.body) {
    username = req.body.userName;
  }

  // Send a response welcoming the user by their username
  res.send(`Welcome ${username}`);
});

// Start the express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the express application to be used in other modules
module.exports = app;

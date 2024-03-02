// Import the 'express' library for creating the API server
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port number on which the server will listen
const PORT = 7865;

// Route handler for the root endpoint
app.get('/', (_, res) => {
  // Send a response with a welcome message to the client
  res.send('Welcome to the payment system');
});

// Route handler for the '/cart/:id' endpoint with numeric ID
app.get('/cart/:id(\\d+)', (req, res) => {
  // Extract the numeric ID parameter from the request URL
  const id = req.params.id;

  // Send a response with a message indicating the payment methods for the specified cart ID
  res.send(`Payment methods for cart ${id}`);
});

// Start the server and listen for incoming connections on the specified port
app.listen(PORT, () => {
  // Log a message to the console indicating that the API server is available
  console.log(`API available on localhost port ${PORT}`);
});

// Export the Express application instance for external use
module.exports = app;

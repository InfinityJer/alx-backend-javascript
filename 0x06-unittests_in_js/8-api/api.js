// Importing the express library for creating an Express application
const express = require('express');

// Creating an instance of the Express application
const app = express();
// Defining the port number for the server
const PORT = 7865;

// Route handler for the root endpoint
app.get('/', (_, res) => {
  // Sending a welcome message as the response
  res.send('Welcome to the payment system');
});

// Starting the server to listen on the specified port
app.listen(PORT, () => {
  // Logging a message indicating that the API is available on the specified port
  console.log(`API available on localhost port ${PORT}`);
});

// Exporting the Express application for external usage
module.exports = app;

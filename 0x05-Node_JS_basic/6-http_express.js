const express = require('express');

// Create an Express application
const app = express();

// Define the port to listen on
const PORT = 1245;

// Define a route handler for the root URL '/'
app.get('/', (_, res) => {
  // Send a response 'Hello Holberton School!' to clients accessing the root URL
  res.send('Hello Holberton School!');
});

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  // Log a message indicating that the server is listening
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the Express application for use in other modules
module.exports = app;

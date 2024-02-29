const http = require('http');

// Define the port and host
const PORT = 1245;
const HOST = 'localhost';

// Create a new HTTP server instance
const app = http.createServer();

// Event listener for handling incoming requests
app.on('request', (_, res) => {
  // Define the response text
  const responseText = 'Hello Holberton School!';

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);

  // Set the status code
  res.statusCode = 200;

  // Write the response to the client
  res.write(Buffer.from(responseText));
});

// Start the server and listen for incoming requests
app.listen(PORT, HOST, () => {
  // Log a message indicating the server is listening
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the app for use in other modules
module.exports = app;

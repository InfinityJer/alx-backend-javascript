import express from 'express'; // Importing Express framework
import mapRoutes from './routes'; // Importing the mapRoutes function

const app = express(); // Creating an instance of Express application
const PORT = 1245; // Port number for the server

mapRoutes(app); // Binding routes to the Express application

// Start the server to listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`); // Logging a message indicating server is running
});

export default app; // Exporting the Express application
module.exports = app; // Exporting the Express application for backward compatibility

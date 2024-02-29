const express = require('express');
const fs = require('fs');

// Create an Express application
const app = express();

// Define the port to listen on
const PORT = 1245;

// Get the CSV file path from command line arguments, if provided
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Check if the dataPath is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  // Read the file asynchronously and process the data
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        // Process the CSV data
        const reportParts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(
          0,
          dbFieldNames.length - 1,
        );

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

// Define route handlers for different endpoints
app.get('/', (_, res) => {
  // Handle requests to the root URL
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  // Handle requests to the '/students' endpoint
  const responseParts = ['This is the list of our students'];

  // Call countStudents to get the report
  countStudents(DB_FILE)
    .then((report) => {
      // If successful, add the report to the response parts
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      // Set response headers and send the response
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      // If there's an error, add the error message to the response parts
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      // Set response headers and send the response
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  // Log a message indicating that the server is listening
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the Express application for use in other modules
module.exports = app;

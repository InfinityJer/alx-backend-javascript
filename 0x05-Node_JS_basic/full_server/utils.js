import fs from 'fs';

/**
 * Reads the data of students in a CSV data file asynchronously.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>} A Promise that resolves to an object containing arrays of student data per field.
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  // Check if the dataPath is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    // Read the file asynchronously
    fs.readFile(dataPath, (err, data) => {
      // Handle errors
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        // Process the data
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        // Iterate through each line of the file
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          // Group students by field
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          // Create an object for each student and add it to the appropriate group
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        // Resolve the Promise with the grouped student data
        resolve(studentGroups);
      }
    });
  }
});

// Export the function
export default readDatabase;
// For backwards compatibility, also export using CommonJS syntax
module.exports = readDatabase;

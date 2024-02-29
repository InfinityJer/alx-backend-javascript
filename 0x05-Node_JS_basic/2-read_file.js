const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => {
  // Check if the file exists
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  // Check if the path points to a file
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  // Read the file and split its content into lines
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  
  // Initialize an object to hold student groups by field
  const studentGroups = {};

  // Extract field names from the first line of the file
  const dbFieldNames = fileLines[0].split(',');
  // Extract property names from field names
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  // Loop through each line of the file (excluding the header)
  for (const line of fileLines.slice(1)) {
    // Split the line into individual fields
    const studentRecord = line.split(',');
    // Extract property values from the record
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    // Get the field of study for the student
    const field = studentRecord[studentRecord.length - 1];
    // Initialize an array for the field if it doesn't exist yet
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    // Map property names to values and create an object for the student
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    // Push the student object into the appropriate field array
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  // Calculate the total number of students
  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  // Log the total number of students
  console.log(`Number of students: ${totalStudents}`);
  // Loop through each field group and log the number of students in each
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;

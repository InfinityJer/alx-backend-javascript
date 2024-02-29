import readDatabase from '../utils'; // Importing the readDatabase function from utils

/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
class StudentsController {
  /**
   * Handles the request to get all students.
   * @param {object} request The HTTP request object.
   * @param {object} response The HTTP response object.
   */
  static getAllStudents(request, response) {
    // Retrieve the path to the database file from command line arguments
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    // Read the database asynchronously
    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        // A comparison function for ordering a list of strings in ascending
        // order by alphabetic order and case insensitive
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        // Iterate through each field and create response parts
        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        // Send the response with status 200 and joined response parts
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        // If an error occurs, send a response with status 500 and the error message
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  /**
   * Handles the request to get all students by major.
   * @param {object} request The HTTP request object.
   * @param {object} response The HTTP response object.
   */
  static getAllStudentsByMajor(request, response) {
    // Retrieve the path to the database file from command line arguments
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    // Extract the major from request parameters
    const { major } = request.params;

    // Validate if the major is supported
    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    // Read the database asynchronously
    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        // Check if the major exists in the database
        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          // Create response text with list of first names in the specified major
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        // Send the response with status 200 and the response text
        response.status(200).send(responseText);
      })
      .catch((err) => {
        // If an error occurs, send a response with status 500 and the error message
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

// Export the class using ES6 syntax
export default StudentsController;
// For backwards compatibility, also export using CommonJS syntax
module.exports = StudentsController;

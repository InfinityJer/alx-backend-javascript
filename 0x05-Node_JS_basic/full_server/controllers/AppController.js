/**
 * Contains the miscellaneous route handlers.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
class AppController {
  /**
   * Handles the request for the homepage.
   * @param {object} request The HTTP request object.
   * @param {object} response The HTTP response object.
   */
  static getHomepage(request, response) {
    // Send a response with status 200 and message 'Hello Holberton School!'
    response.status(200).send('Hello Holberton School!');
  }
}

// Export the class using ES6 syntax
export default AppController;
// For backwards compatibility, also export using CommonJS syntax
module.exports = AppController;

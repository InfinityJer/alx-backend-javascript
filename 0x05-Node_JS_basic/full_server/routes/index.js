import AppController from '../controllers/AppController'; // Importing the AppController
import StudentsController from '../controllers/StudentsController'; // Importing the StudentsController

/**
 * Binds the routes to the appropriate handler in the
 * given Express application.
 * @param {Express} app The Express application.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const mapRoutes = (app) => {
  // Define route bindings
  app.get('/', AppController.getHomepage); // Bind the root route to the AppController's getHomepage method
  app.get('/students', StudentsController.getAllStudents); // Bind the /students route to the StudentsController's getAllStudents method
  app.get('/students/:major', StudentsController.getAllStudentsByMajor); // Bind the /students/:major route to the StudentsController's getAllStudentsByMajor method
};

// Export the mapRoutes function using ES6 syntax
export default mapRoutes;
// For backwards compatibility, also export using CommonJS syntax
module.exports = mapRoutes;

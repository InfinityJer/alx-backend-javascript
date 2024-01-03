// 3-all.js
import { uploadPhoto, createUser } from './utils';

/**
 * Collectively resolves promises from uploadPhoto and createUser.
 * Logs body, firstName, and lastName to the console on successful resolution.
 * Logs 'Signup system offline' in case of an error.
 */
function handleProfileSignup() {
  // Use Promise.all to handle multiple promises
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // Destructure the results array
      const [photoResponse, userResponse] = results;

      // Log the relevant data to the console
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      // Log an error message in case of any error
      console.error('Signup system offline');
    });
}

// Export the function for external use
export default handleProfileSignup;

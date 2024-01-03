// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles profile signup by calling signUpUser and uploadPhoto functions.
 * Returns an array with the status and value or error of the settled promises.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file to be processed.
 * @returns {Promise} - Promise that resolves with an array of settled promises' status and values/errors.
 */
function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to handle multiple promises
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    // Return an array of settled promises' status and values/errors
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  });
}

// Export the function for external use
export default handleProfileSignup;

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
export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}

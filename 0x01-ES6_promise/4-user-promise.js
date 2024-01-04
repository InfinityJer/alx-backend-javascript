// 4-user-promise.js

/**
 * Returns a resolved Promise with an object containing firstName and lastName.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise} - Resolved Promise with user information.
 */

export default function signUpUser(firstName, lastName) {
  return Promise.resolve(
    {
      firstName,
      lastName,
    },
  );
}

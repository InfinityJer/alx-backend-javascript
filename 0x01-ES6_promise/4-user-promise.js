// 4-user-promise.js

/**
 * Returns a resolved Promise with an object containing firstName and lastName.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise} - Resolved Promise with user information.
 */
function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

// Export the function for external use
export default signUpUser;

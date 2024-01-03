// 1-promise.js
/**
 * Returns a Promise that resolves or rejects based on the success parameter.
 * @param {boolean} success - Represents the success or failure of the API call.
 * @returns {Promise} - Resolves with an object for success, rejects with an error for failure.
 */
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Check if the API call is successful
    if (success) {
      // Resolve the promise with a success response
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // Reject the promise with an error for failure
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Export the function for external use
export default getFullResponseFromAPI;

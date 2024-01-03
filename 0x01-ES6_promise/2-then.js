// 2-then.js

/**
 * Appends three handlers to the provided Promise.
 * - Resolves with an object for success.
 * - Rejects with an empty Error object.
 * - Logs 'Got a response from the API' for every resolution.
 * @param {Promise} promise - The Promise to handle.
 * @returns {Promise} - A new Promise with the appended handlers.
 */
function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      // Handle resolution: Return an object for success
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      // Handle rejection: Return an empty Error object
      console.error(error); // Log the error (if needed)
      return new Error();
    });
}

// Export the function for external use
export default handleResponseFromAPI;

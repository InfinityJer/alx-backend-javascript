// 100-await.js
import { uploadPhoto, createUser } from './utils';

/**
 * Calls the uploadPhoto and createUser functions asynchronously.
 * Returns an object with the responses from the functions.
 * @returns {Promise} - Promise that resolves with an object containing photo and user responses.
 */
async function asyncUploadUser() {
  try {
    // Use Promise.all to call both functions asynchronously
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the async functions fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

// Export the function for external use
export default asyncUploadUser;

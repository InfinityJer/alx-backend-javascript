// 5-photo-reject.js

/**
 * Returns a Promise rejecting with an Error indicating that the given fileName cannot be processed.
 * @param {string} fileName - The name of the file to be processed.
 * @returns {Promise} - Rejected Promise with an error message.
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

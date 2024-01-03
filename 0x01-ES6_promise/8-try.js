// 8-try.js

/**
 * Divides the numerator by the denominator.
 * Throws an error if the denominator is equal to 0.
 * @param {number} numerator - The numerator.
 * @param {number} denominator - The denominator.
 * @returns {number} - The result of the division.
 * @throws {Error} - Throws an error if the denominator is 0.
 */
export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }
    return numerator / denominator;
  } catch (error) {
    throw error;
  }
}

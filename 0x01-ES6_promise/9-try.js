// 9-try.js

/**
 * Creates an array named queue and appends values and error messages to it.
 * @param {Function} mathFunction - The math function to be executed.
 * @returns {Array} - The array named queue.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Execute the provided math function and append its result to the queue
    queue.push(mathFunction());
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(`${error}`);
  } finally {
    // Append 'Guardrail was processed' to the queue in every case
    queue.push('Guardrail was processed');
  }

  return queue;
}

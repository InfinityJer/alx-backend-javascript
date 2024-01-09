// File: 7-has_array_values.js

// Function to check if all elements in the array exist within the set
function hasValuesFromArray(set, arr) {
  // Use the every method to check if all elements in the array are present in the set
  const allValuesExist = arr.every(value => set.has(value));

  // Return the boolean result
  return allValuesExist;
}

// Export the function
export default hasValuesFromArray;

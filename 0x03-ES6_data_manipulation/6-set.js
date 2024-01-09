// File: 6-set.js

// Function to create a Set from an array
function setFromArray(arr) {
  // Create a new Set using the spread operator to add elements from the array
  const set = new Set([...arr]);

  // Return the Set
  return set;
}

// Export the function
export default setFromArray;

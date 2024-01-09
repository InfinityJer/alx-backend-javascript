// File: 8-clean_set.js

// Function to clean a set and return a string of values starting with a specific string
function cleanSet(set, startString) {
  // Use the filter method to get values starting with the specified string
  const filteredValues = Array.from(set).filter(value => value.startsWith(startString));

  // Use the map method to append the rest of the string after the startString
  const cleanedValues = filteredValues.map(value => value.slice(startString.length));

  // Join the cleaned values with hyphens and return the result
  return cleanedValues.join('-');
}

// Export the function
export default cleanSet;

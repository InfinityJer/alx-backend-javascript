// File: 10-update_uniq_items.js

// Function to update the quantity of unique items in a map
function updateUniqueItems(inputMap) {
  // Check if the argument is a map
  if (!(inputMap instanceof Map)) {
    throw new Error("Cannot process");
  }

  // Iterate through the entries of the map
  for (const [key, value] of inputMap) {
    // Update the quantity to 100 if it was initially 1
    if (value === 1) {
      inputMap.set(key, 100);
    }
  }
}

// Export the function
export default updateUniqueItems;

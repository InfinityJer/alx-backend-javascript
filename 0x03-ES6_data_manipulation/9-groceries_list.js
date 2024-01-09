// File: 9-groceries_list.js

// Function to create a map of groceries
function groceriesList() {
  // Create a new Map with the specified items
  const groceryMap = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  // Return the Map
  return groceryMap;
}

// Export the function
export default groceriesList;

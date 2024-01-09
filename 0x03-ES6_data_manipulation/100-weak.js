// File: 100-weak.js

// Create a const instance of WeakMap
export const weakMap = new WeakMap();

// Function to query API and track the number of calls for each endpoint
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    // If not, set the initial count to 1
    weakMap.set(endpoint, 1);
  } else {
    // If already in the WeakMap, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count is >= 5, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }

  // Log the current count (optional)
  console.log(weakMap.get(endpoint));
}

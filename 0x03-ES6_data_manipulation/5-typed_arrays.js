// File: 5-typed_arrays.js

// Function to create an Int8 TypedArray
function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array from the buffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  // Return the DataView representing the modified buffer
  return new DataView(buffer);
}

// Export the function
export default createInt8TypedArray;

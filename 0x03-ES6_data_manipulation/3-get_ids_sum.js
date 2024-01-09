// File: 3-get_ids_sum.js

// Function to get the sum of student ids
function getStudentIdsSum(studentList) {
  // Use the reduce function to calculate the sum of student ids
  const sum = studentList.reduce((accumulator, student) => accumulator + student.id, 0);

  // Return the sum
  return sum;
}

// Export the function
export default getStudentIdsSum;

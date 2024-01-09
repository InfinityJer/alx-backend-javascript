// File: 0-get_list_students.js

// Function to get the list of students
function getListStudents() {
  // Array of student objects
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  // Return the array of student objects
  return students;
}

// Export the function
export default getListStudents;

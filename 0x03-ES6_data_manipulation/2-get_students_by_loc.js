// File: 2-get_students_by_loc.js

// Function to get students by location
function getStudentsByLocation(studentList, city) {
  // Use the filter function to get students in the specified city
  const filteredStudents = studentList.filter(student => student.location === city);

  // Return the array of students in the specified city
  return filteredStudents;
}

// Export the function
export default getStudentsByLocation;

// File: 1-get_list_student_ids.js

// Function to get the list of student ids
function getListStudentIds(studentList) {
  // Check if the argument is an array
  if (!Array.isArray(studentList)) {
    return [];
  }

  // Use the map function to extract ids
  const studentIds = studentList.map(student => student.id);

  // Return the array of student ids
  return studentIds;
}

// Export the function
export default getListStudentIds;

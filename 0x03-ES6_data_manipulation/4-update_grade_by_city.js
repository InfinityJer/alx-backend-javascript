// File: 4-update_grade_by_city.js

// Function to update student grades by city
function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to get students for the specified city
  const studentsInCity = studentList.filter(student => student.location === city);

  // Use map to update grades based on newGrades array
  const updatedStudents = studentsInCity.map(student => {
    const matchingGrade = newGrades.find(grade => grade.studentId === student.id);

    // If a matching grade is found, update the student's grade
    if (matchingGrade) {
      return { ...student, grade: matchingGrade.grade };
    } else {
      // If no matching grade is found, set grade to 'N/A'
      return { ...student, grade: 'N/A' };
    }
  });

  // Return the array of updated students
  return updatedStudents;
}

// Export the function
export default updateStudentGradeByCity;

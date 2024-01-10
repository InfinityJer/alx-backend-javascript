// Import required types and classes from the Subjects namespace
import { Subjects } from './subjects';

// Create instances of Cpp, Java, and React classes from the Subjects namespace
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// Create a Teacher object for teaching C
export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

// Output information for C++
console.log('C++');
cpp.setTeacher(cTeacher); // Corrected: Use parentheses to call the setTeacher method
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Output information for Java
console.log('Java');
java.setTeacher(cTeacher); // Corrected: Use parentheses to call the setTeacher method
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Output information for React
console.log('React');
react.setTeacher(cTeacher); // Corrected: Use parentheses to call the setTeacher method
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

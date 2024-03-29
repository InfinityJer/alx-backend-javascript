// 2-hbtn_course.js
export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types of attributes during object creation
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    // Store attributes in underscore attribute version
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Setter for name attribute
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter for length attribute
  get length() {
    return this._length;
  }

  // Setter for length attribute
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter for students attribute
  get students() {
    return this._students;
  }

  // Setter for students attribute
  set students(newStudents) {
    this._students = newStudents;
  }
}

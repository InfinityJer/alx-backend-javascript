// Define the Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any; // Allow any additional attribute
}

// Define the Director interface extending Teacher
export interface Director extends Teacher {
  numberOfReport: number;
}

// Define the printTeacherFunction interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Define the IStudentClassConstructor interface for the constructor of StudentClass
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Define the IStudentClass interface for the StudentClass class
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass class
export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Implement the workOnHomework method
  workOnHomework() {
    return 'Currently working';
  }

  // Implement the displayName method
  displayName() {
    return this._firstName;
  }
}

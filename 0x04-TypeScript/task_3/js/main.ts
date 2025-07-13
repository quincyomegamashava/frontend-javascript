// main.ts

/// <reference path="./js/crud.d.ts" /> // Triple slash directive to include ambient declarations

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface'; // Adjust path as necessary based on your folder structure

// Import everything from crud.js as CRUD
import * as CRUD from './js/crud'; // Adjust path as necessary based on your folder structure

// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // First name, read-only
  readonly lastName: string;  // Last name, read-only
  fullTimeEmployee: boolean; // Indicates if the teacher is a full-time employee
  yearsOfExperience?: number; // Optional: years of experience
  location: string;          // Teacher's location
  [propName: string]: any;   // Allows for additional arbitrary properties
}

// Example usage of Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Additional property
};

console.log(teacher3);

// 2. Extending the Teacher class
// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Required attribute for Directors
}

// Example usage of Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Specific to Directors
};

console.log(director1);

// 3. Printing teachers
// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Should print "J. Doe"

// 4. Writing a class
// Interface for the constructor of StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student1: Student = new Student("Alice", "Smith");
console.log(student1.displayName()); // Should print "Alice"
console.log(student1.workOnHomework()); // Should print "Currently working"

// 5. Advanced types Part 1
// DirectorInterface with expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementation
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementation
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Expected results for createEmployee
console.log(createEmployee(200)); // Should return a Teacher instance
console.log(createEmployee(1000)); // Should return a Director instance
console.log(createEmployee('$500')); // Should return a Director instance

// 6. Creating functions specific to employees
// Type predicate to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Expected results for executeWork
executeWork(createEmployee(200)); // Should print "Getting to work"
executeWork(createEmployee(1000)); // Should print "Getting to director tasks"

// 7. String literal types
// Define a String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  // This part is technically unreachable due to the 'Subjects' type,
  // but good practice for exhaustive checks if the type were less strict.
  return 'Unknown Subject';
}

// Expected results for teachClass
console.log(teachClass('Math'));    // Should print "Teaching Math"
console.log(teachClass('History')); // Should print "Teaching History"

// 8. Ambient Namespaces
// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
const newRowID: RowID = CRUD.insertRow(row);

// Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };

// Finally, call the updateRow and deleteRow commands.
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);


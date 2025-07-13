// main.ts

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);


// main.ts

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


// main.ts

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



// main.ts

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


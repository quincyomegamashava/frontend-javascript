// It includes properties common to both teachers and directors.
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

// Define the Directors interface which extends the Teacher interface.
// This allows a Director to have all the properties of a Teacher,
// in addition to their own specific properties.
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create an instance of the Directors interface.
// This object must satisfy all properties from both Teacher and Directors.
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Log the director object to the console to show its structure.
// The output should match the example provided in the task description.
console.log(director1);
// task_4/js/main.ts

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Bring classes and types from the Subjects namespace into local aliases
import Cpp = Subjects.Cpp;
import Java = Subjects.Java;
import React = Subjects.React;
type Teacher = Subjects.Teacher;

// Create constants for Cpp, Java, and React Subjects
const cpp = new Cpp();
const java = new Java();
const react = new React();

// Create one Teacher object cTeacher with experienceTeachingC = 10
const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Also export them for external usage
export { cpp, java, react, cTeacher };

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher); // Set cTeacher as the teacher for Cpp
console.log(cpp.getRequirements()); // Call getRequirements
console.log(cpp.getAvailableTeacher()); // Call getAvailableTeacher

// For Java subject
console.log('Java');
java.setTeacher(cTeacher); // Set cTeacher as the teacher for Java
console.log(java.getRequirements()); // Call getRequirements
console.log(java.getAvailableTeacher()); // Call getAvailableTeacher

// For React subject
console.log('React');
react.setTeacher(cTeacher); // Set cTeacher as the teacher for React
console.log(react.getRequirements()); // Call getRequirements
console.log(react.getAvailableTeacher()); // Call getAvailableTeacher


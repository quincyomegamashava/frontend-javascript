// task_4/js/main.ts

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Create and export constants for Cpp, Java, and React Subjects
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

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


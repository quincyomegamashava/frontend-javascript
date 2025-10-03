// task_4/js/subjects/Subject.ts

/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Subject {
    teacher: Teacher;
    setTeacher(teacher:Teacher): void;
  }
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}


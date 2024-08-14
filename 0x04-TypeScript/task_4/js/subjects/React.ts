namespace Subjects {
  export class React extends Subject {
    experienceTeachingReact?: number;

    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher?.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}


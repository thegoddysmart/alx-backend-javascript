interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTask(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTask(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTask(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTask(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


type Employee = Teacher | Director;

function isDirector(employee: Employee): employee is Director {
    return (employee as Director).workDirectorTask !== undefined;
}

function executeWork(employee: Employee) {
    if (isDirector(employee)) {
        employee.workDirectorTask();
    } else {
        employee.workTeacherTask();
    }
}

// console.log(executeWork(createEmployee(200)));
// console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History"
  } else {
    return "No class"
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

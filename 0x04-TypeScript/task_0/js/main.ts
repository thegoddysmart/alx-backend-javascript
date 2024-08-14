interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'One',
  age: 15,
  location: 'Nigeria',
};

const student2: Student = {
  firstName: 'Adam',
  lastName: 'Two',
  age: 35,
  location: 'Outside',
};

const studentsList: Student[] = [
  student1,
  student2,
];

document.addEventListener('DOMContentLoaded', () => {
  // Create a new table element
  const table = document.createElement('table');

  // Create table rows and cells
  for (const student of studentsList) {
    const row = table.insertRow();

    const cellfn = row.insertCell();
    cellfn.textContent = `${student.firstName}`;

    const cellloc = row.insertCell();
    cellloc.textContent = `${student.location}`;
  }

  // Append the table to the body of the document
  document.body.appendChild(table);
});

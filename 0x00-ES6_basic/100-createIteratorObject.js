export default function createIteratorObject(report) {
  const employeesArray = [];
  for (const item of Object.values(report.allEmployees)) {
    employeesArray.push(...item);
  }

  return employeesArray;
}

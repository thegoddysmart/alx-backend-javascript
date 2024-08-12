export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grader = newGrades.find((entry) => entry.studentId === student.id);
      return {
        ...student,
        grade: grader ? grader.grade : 'N/A',
      };
    });
}

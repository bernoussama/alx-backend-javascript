export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => ({
    ...student,
    grade: (newGrades.filter((grade) => grade.studentId === student.id).pop() || { grade: 'N/A' }).grade,
  }));
}

export default function getListStudentIds(students) {
  return Array.isArray(students) ? Object.keys(students) : [];
}

export default function createIteratorObject(report) {
  return (function* reportIterator() {
    for (const department in report.allEmployees) {
      if (report.allEmployees[department] !== undefined) {
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    }
  }());
}

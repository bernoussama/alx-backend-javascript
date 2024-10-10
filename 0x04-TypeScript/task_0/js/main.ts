interface Student {
firstName: string;
 lastName: string;
 age: number;
 location: string;
}
const student1: Student = {
 firstName: "John",
 lastName: "Doe",
 age: 20,
 location: "Boston"
};
const student2: Student = {
 firstName: "Jane",
 lastName: "Doe",
 age: 21,
 location: "New York"
};
const studentsList: Student[] = [student1, student2];



const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
  const headRow = document.createElement('tr');
  headRow.innerHTML += '<td>First Name</td>';
  headRow.innerHTML += '<td>Location</td>';
  thead.appendChild(headRow);

for (const student of studentsList) {
 const tr = document.createElement("tr");
 const firstName = document.createElement("td");
 firstName.textContent = student.firstName;
 const location = document.createElement("td");
 location.textContent = student.location;
 tr.appendChild(firstName);
 tr.appendChild(location);
 tbody.appendChild(tr);
}


  table.appendChild( thead);
  table.appendChild( tbody);
  document.body.appendChild(table);

const style = document.createElement("style");
style.textContent = `
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
  text-align: left;
}
`;
document.head.appendChild(style);

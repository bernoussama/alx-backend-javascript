interface Teacher {
  readonly firstName: string;
  fullTimeEmployee: boolean;
  readonly lastName: string;
  location: string;
  [propName: string]: any;
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

export interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentInterface {
  private _firstName: string;
  private _lastName: string;

  constructor(public firstName: string, public lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

   workOnHomework(): string {
    return "Currently working"
  }
  displayName(): string {
    return `${this._firstName}`;
  }
}

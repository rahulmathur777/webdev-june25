/*
function createPerson(
  name: string,
  age: number,
  college: string
): {
  name: string;
  age: number;
  college: string;
} {
  return {
    name,
    age,
    college,
  };
}

let p = createPerson("Naman", 21, "BVP");
console.log(p);

*/

// interface person {
//   name: string;
//   age: number;
//   college: string;
// }

type person = {
  name: string;
  age: number;
  college: string;
};

function createPerson(name: string, age: number, college: string): person {
  return {
    name,
    age,
    college,
  };
}

let p: person = createPerson("Naman Phone mat chala", 21, "BVP");
console.log(p);

// Union and Intersections
type language = "CPP" | "Java" | "Python";

let x: language = "CPP";
console.log(x);

type student = {
  name: string;
  marks: number;
};

type teacher = {
  name: string;
  subject: string;
};

type school = student | teacher;

let s: school = {
  name: "Pulkit",
  marks: 100,
};

console.log(s);

type schoolName = {
  schoolName: string;
};

type principal = teacher & schoolName;

let p1: principal = {
  name: "adsad",
  subject: "CPP",
  schoolName: "asdadsa",
};

// USING INTERFACES
interface StudentWithFn {
  name: string;
  greet: () => void;
}
// Interface as an object
const user: StudentWithFn = {
  name: "Raj",
  greet: () => console.log("Hi from Coding Blocks!"),
};

// Interface as class
interface Mentor {
  name: string;
  teach(): void;
}

class CBMentor implements Mentor {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  teach() {
    console.log(`${this.name} is teaching TypeScript at Coding Blocks.`);
  }
}

const kartik = new CBMentor("Kartik");
kartik.teach();
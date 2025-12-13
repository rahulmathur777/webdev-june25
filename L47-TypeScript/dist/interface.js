"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
function createPerson(name, age, college) {
    return {
        name,
        age,
        college,
    };
}
let p = createPerson("Naman Phone mat chala", 21, "BVP");
console.log(p);
let x = "CPP";
console.log(x);
let s = {
    name: "Pulkit",
    marks: 100,
};
console.log(s);
let p1 = {
    name: "adsad",
    subject: "CPP",
    schoolName: "asdadsa",
};
// Interface as an object
const user = {
    name: "Raj",
    greet: () => console.log("Hi from Coding Blocks!"),
};
class CBMentor {
    name;
    constructor(name) {
        this.name = name;
    }
    teach() {
        console.log(`${this.name} is teaching TypeScript at Coding Blocks.`);
    }
}
const kartik = new CBMentor("Kartik");
kartik.teach();
//# sourceMappingURL=interface.js.map
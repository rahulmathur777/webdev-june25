"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
console.log(x);
let name = "Coding Blocks";
console.log(name);
name = 1;
console.log(name);
function greet(person) {
    console.log("Hello", person);
}
greet("Kartik");
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
// Passing functions as arguments
function performAddition(add) {
    console.log(add(10, 20));
    console.log(add(101, 20));
    console.log(add(1110, 20));
}
performAddition(sum);
//# sourceMappingURL=script.js.map
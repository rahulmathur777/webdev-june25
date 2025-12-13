let x = 1;
console.log(x);

let name: any = "Coding Blocks";
console.log(name);

name = 1;
console.log(name);

function greet(person: string) {
  console.log("Hello", person);
}

greet("Kartik");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(10, 20));

// Passing functions as arguments
function performAddition(add: (a: number, b: number) => number): void {
  console.log(add(10, 20));
  console.log(add(101, 20));
  console.log(add(1110, 20));
}

performAddition(sum);

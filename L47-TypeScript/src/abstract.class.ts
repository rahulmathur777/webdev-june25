abstract class User {
  age: number;
  name: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  abstract sayHi(): string;
}

class person extends User {
  sayHi(): string {
    return "Hello";
  }
}

let p = new person("ABC", 20);

console.log(p.sayHi());

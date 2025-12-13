"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    age;
    name;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class person extends User {
    sayHi() {
        return "Hello";
    }
}
let p = new person("ABC", 20);
console.log(p.sayHi());
//# sourceMappingURL=abstract.class.js.map
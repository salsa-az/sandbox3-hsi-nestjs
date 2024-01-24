"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rabbit = void 0;
const animal_1 = require("./animal");
class Rabbit extends animal_1.Animal {
    constructor(name, age) {
        super(name, age, true);
    }
    eat() {
        return `${this.name} yang berumur ${this.age} sedang makan!`;
    }
}
exports.Rabbit = Rabbit;
const myRabbit = new Rabbit("Labi", 2);
// console.info(myRabbit);
// console.info(myRabbit.eat());

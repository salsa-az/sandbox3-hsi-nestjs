"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eagle = void 0;
const animal_1 = require("./animal");
class Eagle extends animal_1.Animal {
    constructor(name, age, isMammal) {
        super(name, age, isMammal || false);
        this.speed = 220;
    }
    fly() {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }
    run() {
        return `${this.name} Berlari dengan kecepatan ${this.speed} km";`;
    }
}
exports.Eagle = Eagle;
const myEagle = new Eagle("Elo", 4);
// console.info(myEagle);
// console.info(myEagle.fly());
// console.info(myEagle.run()); // error karena method run() protected

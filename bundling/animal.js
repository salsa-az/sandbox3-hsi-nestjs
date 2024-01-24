"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, _age, isMammal) {
        this.name = name;
        this._age = _age;
        this.isMammal = isMammal;
    }
    // Setter digunakan untuk memvalidasi apakah nilai age integer atau bukan
    set _age(value) {
        if (value !== undefined && !Number.isInteger(value)) {
            throw new Error("Property age harus berupa integer");
        }
        this.age = value;
    }
}
exports.Animal = Animal;
// const paus = new Animal("Willy", 3, true);
// console.info(paus);

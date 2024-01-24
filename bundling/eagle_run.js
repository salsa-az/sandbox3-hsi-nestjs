"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eagle_1 = require("./eagle");
class EagleRun extends eagle_1.Eagle {
    // Speed pada class Eagle sudah bernilai 220
    constructor(name, age) {
        super(name, age || 0);
    }
    // Method fly() sama persis dengan yang ada di class Eagle, tidak perlu ditulis kembali 
    runEagle() {
        return this.run();
    }
}
const speedTest = new EagleRun("Labi");
// console.info(speedTest);
// console.info(speedTest.fly());
// console.info(speedTest.runEagle());

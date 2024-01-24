import { Animal } from './animal';

export class Rabbit extends Animal {

    constructor(name: string, age: number) {
        super(name, age, true);
    }
    
    eat(): string {
        return `${this.name} yang berumur ${this.age} sedang makan!`;
    }
}

const myRabbit = new Rabbit("Labi", 2);

// console.info(myRabbit);
// console.info(myRabbit.eat());
import { Animal } from './animal';

export class Eagle extends Animal {
    speed: number;

    constructor(name: string, age: number, isMammal?: boolean) {
        super(name, age, isMammal || false);
        this.speed = 220;
    }
    
    fly(): string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }
    
    protected run(): string {
        return `${this.name} Berlari dengan kecepatan ${this.speed} km";`;
    }
}

const myEagle = new Eagle("Elo", 4);

// console.info(myEagle);
// console.info(myEagle.fly());
// console.info(myEagle.run()); // error karena method run() protected



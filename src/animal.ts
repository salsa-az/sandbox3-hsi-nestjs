export class Animal {
    name: string;
    age?: number;
    isMammal: boolean;
    
    constructor(name: string, _age: number, isMammal: boolean) {
        this.name = name;
        this._age = _age;
        this.isMammal = isMammal;
    }

    // Setter digunakan untuk memvalidasi apakah nilai age integer atau bukan
    set _age(value: number | undefined) {
        if (value !== undefined && !Number.isInteger(value)) {
            throw new Error("Property age harus berupa integer");
        }
        this.age = value;
    }
}

// const paus = new Animal("Willy", 3, true);
// console.info(paus);
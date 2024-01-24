import { Eagle } from './eagle';

class EagleRun extends Eagle{

    // Speed pada class Eagle sudah bernilai 220

    constructor(name: string, age?: number) {
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
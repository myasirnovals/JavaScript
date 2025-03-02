class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.info(`Hello ${name}, My name is ${this.name}`);
    }
}

const yasir = new Person("Yasir");
console.info(yasir);
yasir.sayHello("Joko");

const budi = new Person("Budi");
console.info(budi);
budi.sayHello("Joko");

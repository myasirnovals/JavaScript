class Employee {
    constructor(firstName) {
        this.firstName = firstName;
    }
    sayHello(name) {
        console.info(`Hello ${name}, My name is Employee ${this.firstName}`);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }
    sayHello(name) {
        console.info(`Hello ${name}, My name is Manager ${this.firstName} ${this.lastName}`);
    }
}

const budi = new Employee("Budi");
budi.sayHello("Joko");

const yasir = new Manager("Yasir", "Noval");
yasir.sayHello("Joko");

console.info(budi);
console.info(yasir);

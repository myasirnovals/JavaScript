class Employee {
    sayHello(name) {
        console.info(`Hello ${name}, My name is Employee ${this.name}`);
    }
}

class Manager extends Employee {
    sayHello(name) {
        console.info(`Hello ${name}, My name is Manager ${this.name}`);
    }
}

const budi = new Employee();
budi.name = "Budi";
budi.sayHello("Joko");

const yasir = new Manager();
yasir.name = "Yasir";
yasir.sayHello("Joko");

console.info(budi);
console.info(yasir);

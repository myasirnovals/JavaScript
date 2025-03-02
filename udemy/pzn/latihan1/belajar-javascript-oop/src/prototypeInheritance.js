function Employee(name) {
    this.name = name;
}

function Manager(name) {
    this.name = name;
}

// Manager.prototype = Employee.prototype; // cara yang salah untuk melakukan inheritance
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
    console.info(`Hello ${name}, My name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
    console.info(`Hello ${name}, My name is Employee ${this.name}`);
};

const employee = new Employee("Budi");
employee.sayHello("Joko");

const manager = new Manager("Yasir");
manager.sayHello("Joko");

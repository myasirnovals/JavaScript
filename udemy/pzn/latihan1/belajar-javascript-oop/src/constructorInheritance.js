function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`Hellp ${name}, My name is ${this.firstName}`);
    };
}

function Manager(firstName, lastName) {
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const yasir = new Manager("Yasir", "Noval");
console.info(yasir);

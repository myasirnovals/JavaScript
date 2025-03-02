function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    };
}

Person.prototype.sayBye = function () {
    console.info("Good Bye");
}

Person.prototype.run = function () {
    console.info(`${this.firstName} is running`);
}

const yasir = new Person("Yasir", "Noval");
const budi = new Person("Budi", "Nugraha");

console.log(yasir)
console.log(budi)

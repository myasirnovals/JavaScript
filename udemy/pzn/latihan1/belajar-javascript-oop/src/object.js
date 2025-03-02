function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    };
}

const yasir = new Person("Yasir", "Noval");
yasir.sayHello("Joko");

const budi = new Person("Budi", "Nugraha");
budi.sayHello("Joko");

console.log(yasir)
console.log(budi)

class Customer {
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {

    }
}

const yasir = new Customer("Yasir", "Noval");
console.info(yasir);


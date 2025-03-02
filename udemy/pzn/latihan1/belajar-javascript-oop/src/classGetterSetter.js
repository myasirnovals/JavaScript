class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const result = value.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
    }
}

const yasir = new Person("Yasir", "Noval");
console.info(yasir);
console.info(yasir.fullName);

yasir.fullName = "Budi Nugraha";
console.info(yasir);

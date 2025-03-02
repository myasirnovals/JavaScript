class Employee {

}

class Manager extends Employee {

}

const budi = new Employee();
const yasir = new Manager();

console.info(typeof budi);
console.info(typeof yasir);

console.info(budi instanceof Employee); // true
console.info(budi instanceof Manager); // false

console.info(yasir instanceof Employee); // false
console.info(yasir instanceof Manager); // true

const person = {};

Reflect.set(person, "firstName", "Yasir");
Reflect.set(person, "lastName", "Noval");

console.info(person);

// mengambil data dari object menggunakan reflection
console.info(Reflect.get(person, "firstName"));
console.info(Reflect.get(person, "lastName"));

// mengecek apakah data di dalam person ada atau tidak
console.info(Reflect.has(person, "firstName"));
console.info(Reflect.has(person, "middleName"));
console.info(Reflect.has(person, "lastName"));
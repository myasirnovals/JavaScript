function factorialRecursive(value) {
    if (value == 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}

function tampilAngka(value) {
    if (value === 0) return;

    console.log(value);
    tampilAngka(value - 1)
}

console.log(factorialRecursive(10));

tampilAngka(10)
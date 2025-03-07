class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new Error("Total parameter harus lebih dari 0");
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }

        return total;
    }
}

try {
    console.info(MathUtil.sum());
    console.info("Yasir");
} catch (error) {
    console.info(`Terjadi error : ${error.message}`);
} finally {
    console.info("Program selesai");
}

console.info("Noval");

class Counter {
    #counter = 1;

    next() {
        try {
            return this.#counter;
        } finally {
            this.#counter++;
        }
    }
}

const counter = new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());




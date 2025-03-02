class Person {
    say(name) {
        if (name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithoutName() {
        console.info("Hello");
    }

    #sayWithName(name) {
        console.info(`Hello ${name}`);
    }
}

const joko = new Person();
joko.say("Joko");

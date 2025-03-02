{
    // symbol
    const firstName = Symbol("firstName");
    const lastName = Symbol("lastName");

    const person = {};
    person[firstName] = "Yasir";
    person[lastName] = "Noval";

    console.info(person);
}

{
    // symbol for
    console.info(Symbol.for("firstName") === Symbol.for("firstName"));

    const person = {};
    person[Symbol.for("firstName")] = "Yasir";
    person[Symbol.for("lastName")] = "Noval";

    console.info(person);
    console.info(person[Symbol.for("firstName")]);
    console.info(person[Symbol.for("lastName")]);
}

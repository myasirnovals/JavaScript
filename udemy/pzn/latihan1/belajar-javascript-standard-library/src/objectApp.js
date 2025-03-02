{
	// object freeze & seal
	const person = {
		firstName: "Yasir",
		lastName: "Noval"
	};

	// Object.freeze(person);
	Object.seal(person);

	person.firstName = "Budi";
	delete person.lastName;

	console.info(person);
}

{
	// object assign
	const target = {
		firstName: "Yasir"
	};

	const source = {
		lastName: "Noval"
	};

	Object.assign(target, source);
	console.info(target);
}

{
	// Object property name & value
	const person = {
		firstName: "Yasir",
		lastName: "Noval"
	};

	console.info(Object.values(person));
	console.info(Object.getOwnPropertyNames(person));
}
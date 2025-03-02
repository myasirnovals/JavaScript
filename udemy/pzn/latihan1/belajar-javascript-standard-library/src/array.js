{
	// array loop
	const array = ["Muhamad", "Yasir", "Noval"];

	array.forEach(function (value, index) {
		console.info(`${index} : ${value}`);
	});

	array.forEach((value, index) => console.info(`${index} : ${value}`));

	array.forEach(value => console.info(value));
}

{
	// array queue
	const queue = [];

	queue.push("Dika");
	queue.push("Erick");
	queue.push("Yasir");
	queue.push("Yusron");

	console.info(queue.shift());
	console.info(queue.shift());
	console.info(queue.shift());
	console.info(queue.shift());
	console.info(queue.shift());
}

{
	// array stack
	const stack = [];

	stack.push("Dika");
	stack.push("Erick");
	stack.push("Yasir");
	stack.push("Yusron");

	console.info(stack.pop());
	console.info(stack.pop());
	console.info(stack.pop());
	console.info(stack.pop());
	console.info(stack.pop());
}

{
	// array search
	const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; 

	console.info(source.find(value => value > 3));
	console.info(source.findIndex(value => value > 3));
	console.info(source.includes(7));
	console.info(source.indexOf(5));
	console.info(source.lastIndexOf(5));
}

{
	// array filter
	const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const ganjil = number.filter(value => value % 2 === 1);
	const genap = number.filter(value => value % 2 === 0);

	console.info(number)
	console.info(ganjil);
	console.info(genap);
}

{
	// array transform
	const names = ["Muhamad", "Yasir", "Noval"];
	const namesUpper = names.map(value => value.toUpperCase());
	console.info(namesUpper);

	const namesReduce = names.reduce((before, value) => before + " " + value);
	console.info(namesReduce);

	const namesRight = names.reduceRight((before, value) => before + " " + value);
	console.info(namesRight);

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const total = numbers.reduce((before, value) => before + value);
	console.info(total);
}
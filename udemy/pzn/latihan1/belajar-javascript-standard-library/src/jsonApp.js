const person = {
	firstName: "Muhamad",
	middleName: "Yasir",
	lastName: "Noval",
	address: {
		country: "Indonesian",
		city: "Bandung",
	},
	hobbies: ["Coding", "Game", "Nonton Anime"],
};

const json = JSON.stringify(person);
console.info(json);

const jsonObject = JSON.parse(json);
console.info(jsonObject);
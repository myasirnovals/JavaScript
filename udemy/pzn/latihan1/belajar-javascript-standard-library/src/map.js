const map = new Map();
map.set("name", "Muhamad Yasir Noval");
map.set("address", "Indonesian");

console.info(map);
console.info(map.get("name"));
console.info(map.get("address"));
console.info(map.get("hobby"));

for (const element of map) {
    console.info(`${element[0]} : ${element[1]}`);
}

map.forEach((value, key) => console.info(`${value} : ${key}`));

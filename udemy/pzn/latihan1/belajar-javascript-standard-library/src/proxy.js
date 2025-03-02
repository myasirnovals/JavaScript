const target = {
    firstName: "Muhamad"
};

const handler = {
    get: function (target, property) {
        console.info(`Access property : ${property}`);
        return target[property];
    },
    set: function (target, property, value) {
        console.info(`Change property ${property} : ${value}`);
        if (value == null) {
            target[property] = "";
        } else {
            target[property] = value;
        }
    }
};

const proxy = new Proxy(target, handler);
proxy.middleName = "Yasir";
proxy.lastName = null;

console.info(proxy.firstName);
console.info(proxy.middleName);
console.info(proxy.lastName);
console.info(target);
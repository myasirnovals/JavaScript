class Configuration {
    static name = "Belajar JavaScript Dasar";
    static version = 1.0;
    static author = "Muhamad Yasir Noval";
}

const config = new Configuration();
console.info(config);

console.info(Configuration.name);
console.info(Configuration.version);
console.info(Configuration.author);

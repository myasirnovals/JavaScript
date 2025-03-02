const original = "Muhamad&Yasir=Noval";
console.log(original);

const encoded = btoa(original);
console.info(encoded);

const decoded = atob(encoded);
console.info(decoded);
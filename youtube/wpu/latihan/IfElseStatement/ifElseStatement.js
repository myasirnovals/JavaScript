var angka = prompt("Masukan angka");

if (angka % 2 === 0) {
    alert(`${angka} adalah bilangan genap`);
} else if (angka % 2 === 1) {
    alert(`${angka} adalah bilangan ganjil`);
} else {
    alert("Tolong masukan angka, bukan huruf maupun karakter lain");
}

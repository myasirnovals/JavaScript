// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
//
// arr[0] = "Muhamad";
// arr[1] = "Yasir";
// arr[2] = "Noval"
//
// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Dika", "Erick", "Yasir", "Yusron"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Dika", "Erick", "Yasir", "Yusron"];
//
// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + " : " + arr[i]);
// }

// Method pada array
// var arr = ['Muhamad', 'Yasir', 'Noval'];

// 1. Join
// console.log(arr.join(", "));

// 2. push & pop
// arr.push('Doddy');
// arr.pop();
// console.log(arr);

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift('Doddy');
// console.log(arr);

// 4. splice
// splice (indexAwal, mau dihapus berapa,
// elemenBaru1, elemenBaru2)
// var arr = ['Dika', 'Erick'];
// arr.splice(1, 0, 'Yasir', 'Yusron');
// console.log(arr.join(", "));

// 5. slice
// slice(awal, akhir)
// var arr = ['Yasir', 'Noval', 'Yusron', 'Noval'];
// var arr2 = arr.slice(1, 3);
//
// console.log(arr2.join(', '));

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['Dika', 'Erick', 'Yasir', 'Yusron'];

// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
// });

// 7. map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
//
// console.log(angka2.join(', '));

// 8. sort
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(', '));

// 9. filter & find
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.filter(function (x) {
    return x > 5;
});

var angka3 = angka.find(function (x) {
    return x > 5;
});

console.log(angka2.join(', '));
console.log(angka3)
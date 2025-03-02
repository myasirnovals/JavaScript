let pengunjung = [
    ["Derek Westbrook", "2350081001", "L"],
    ["Gary Sanderson", "2350081002", "L"],
    ["Jame Ramirez", "2350081003", "L"],
    ["Paul Jackson", "2350081004", "L"],
    ["Sorasaki Hina", "2350081005", "P"],
    ["Meiko Honma", "2350081006", "P"],
];

let ulangi = true;

while (ulangi) {
    console.log("###### Perpustakaan Gamelab ######");
    console.log("1. Pengujung");
    console.log("2. Keluar");
    console.log("##################################");
    console.log("Pilih Menu : ");

    var inputUser = prompt("Masukan nomor [1, 2]: ");

    switch (inputUser) {
        case "1":
            muatData(pengunjung);
            ulangi = confirm("Ulangi aplikasi?");
            break;
        case "2":
            console.log("Terimaksih sudah menggunakan aplikasi yang saya buat");
            ulangi = false;
            break;
        default:
            console.log("Nomor yang anda masukan salah");
            break;
    }
}

function muatData(arrayData) {
    console.log("\n");
    console.log("Pengunjung Perpustakaan");
    console.log("\n");
    for (let i = 0; i < pengunjung.length; i++) {
        console.log("Nama\t\t\t:\t" + arrayData[i][0]);
        console.log("Nomor Anggota\t:\t" + arrayData[i][1]);
        console.log("Gender\t\t\t:\t" + arrayData[i][2]);
        console.log("\n");
    }
}
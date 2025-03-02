let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    } else if (noAngkot % 2 === 0) {
        console.log(`Angkot No. ${noAngkot} sedang lembur.`);
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
    }
}

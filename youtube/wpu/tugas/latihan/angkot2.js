let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    noAngkot++;
}

let angkotTidakBeroperasi = angkotBeroperasi + 1;
for (angkotTidakBeroperasi; angkotTidakBeroperasi <= jmlAngkot; angkotTidakBeroperasi++) {
    console.log(`Angkot No. ${angkotTidakBeroperasi} tidak beroperasi dengan baik.`);
}

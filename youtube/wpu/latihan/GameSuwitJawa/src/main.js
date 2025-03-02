var tanya = true;
while (tanya) {
// menangkap pilihan player
    let p = prompt('pilih : gajah, semut, orang');

// menangkap pilihan komputer
// membangkitkan bilangan random
    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';

// menentukan rules
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'Memasukan pilihan yang salah!!';
    }

// tampilkan hasilnya
    alert(`Kamu memilih : ${p} dan Komputer memilih : ${comp} \nMaka Hasilnya : kamu ${hasil}`);

    tanya = confirm('Lagi?');
}

alert('Terimakasih sudah bermain (^v^)');

var penumpang = ['Yasir', 'Budi', 'Joko'];

// membuat function expression
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length === 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);

        // kembalikan nilai array
        return penumpang
    } else {
        // telusuri seluruh kursi dari awal
        for (let i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] === undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;

                // kembalikan nilai array
                return penumpang;
            } else if (i === penumpang.length - 1) {
                // tambah penumpan di akhir array
                penumpang.push(namaPenumpang);

                // kembalikan nilai
                return penumpang;
            } else if (penumpang[i] === namaPenumpang) {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + 'sudah ada di dalam angkot');
                return penumpang;
            }
        }
    }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length === 0) {
        // tampilkan pesan kesalahan
        console.log('Angkot masih kosong!');

        // kembalikan nilai array
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (let i = 0; i < penumpang.length; i++) {
            // jika ada nama penumpang yang sama
            if (penumpang[i] === namaPenumpang) {
                // hapus penumpang dengan undefined
                penumpang[i] = undefined;

                // kembalikan nilai array
                return penumpang;
            }
        }

        // tampilkan pesan kesalahan
        console.log(namaPenumpang + ', tidak ada di dalam angkot!');

        // kembalikan nilai array
        return penumpang;
    }
};
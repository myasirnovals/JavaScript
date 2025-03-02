/*Membuat Object*/
// Object literal

let mahasiswa = [];

mahasiswa[1] = {
    nama: 'Muhamad Yasir Noval',
    nim: '2350081004',
    email: 'myasirnoval@gmail.com',
    jurusan: 'Informatika',
    fakultas: 'Sains dan Informatika'
};

mahasiswa[2] = {
    nama: 'Muhamad Yusron Noval',
    nim: '2350081005',
    email: 'myasirnoval@gmail.com',
    jurusan: 'Informatika',
    fakultas: 'Sains dan Informatika'
};

// function declaration
function objectMahasiswa(nama, nim, email, jurusan, fakultas) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    mhs.fakultas = fakultas;

    return mhs;
}

mahasiswa[3] = objectMahasiswa(
    "Arrya Wijaya",
    "2350081010",
    "aryawijaya@gmail.com",
    'Informatika',
    'Sains dan Informatika'
);

// Constructor
function Mahasiswa(nama, nim, email, jurusan, fakultas) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    this.fakultas = fakultas;
}

mahasiswa[4] = new Mahasiswa(
    "Ammar Bagas W. F",
    "2350081010",
    "aryawijaya@gmail.com",
    'Informatika',
    'Sains dan Informatika'
);
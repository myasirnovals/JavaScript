// let angka = prompt('Masukan Angka: ');
//
// switch (angka) {
//     case '1':
//         alert('Angka 1');
//         break;
//     case '2':
//         alert('angka 2');
//         break;
//     case '3':
//         alert('angka 3');
//         break;
//     default:
//         alert('Angka yang Anda masukan salah!!!');
//         break;
// }

let item = prompt('Masukan makanan / minuman : \n(cth: nasi, daging, susu, hamburger, softdrink)');

switch (item) {
    case 'nasi':
    case 'susu':
    case 'daging':
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('Anda memasukan makanan / minuman apa??');
        break;
}

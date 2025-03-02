var Animal = 'Giraffe';

switch (Animal) {
  case 'Giraffe': 
    console.log('Hewan ini tidak berbahaya.'); 
    break;// Untuk menghentikan proses perbandingan
  case 'Dinosaur':
  default://  Jika semua kondisi sebelumnya tidak terpenuhi
    console.log('Hewan ini berbahaya.'); 
}

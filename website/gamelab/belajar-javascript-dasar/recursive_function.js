function recurs(x)
{
  console.log(`RECURSIVE ${x}`);

  if (x < 10) { // termination condition
    recurs(x + 1); // fungsi recurs() memanggil dirinya sendiri (secara rekursif)
  }
}
recurs(1); // memanggil fungsi recursif dengan parameter Number 1

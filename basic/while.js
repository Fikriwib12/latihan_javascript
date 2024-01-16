console.log('whie exercise')

// let a = true

// while (a) {
//     console.log('hello world')
//     a = confirm('lagi?')
// }

// let a = 1
// while (a <= 10) {
//     console.log('Hallo dunia ' + a + 'x')
//     a++
// }

// let i = 1
//  while (i < 100) {
//     i++
//     if(i % 2 !== 0){
//         console.log(i + " adalah bilangan ganjil")
//     }
//  }

// Buat variabel `sum` untuk menyimpan jumlah kuadrat
let sum = 0;

// Buat variabel `i` untuk menyimpan nilai angka
let i = 1;

// Selama nilai `i` kurang dari atau sama dengan 10, jalankan kode ini
while (i <= 10) {
  // Hitung kuadrat dari nilai `i`
  let square = i * i;

  // Tambahkan kuadrat dari `i` ke `sum`
  sum += square;

  // Tambahkan nilai `i` dengan 1
  i++;
}

// Cetak nilai `sum`
console.log(sum);
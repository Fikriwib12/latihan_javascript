// 1. Contoh aliran Sesat 1
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); //ini contoh aliran sesat variabel teteap bisa di akses walaupun berada diluar blok program
// 1.2 tips contoh penerapan aliran sesat ini bisa menggunakan immediately invoked function expression (IIFE)
(function () {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
})();

// console.log(i); Jika variabel di panggil diluar blok akan error karena menggunakan IIFE salah satu counter aliran sesat var js

// 2. Contoh aliran Sesat 2
console.log(j); //ini contoh aliran sesat variabel tetap di panggil walupun hasilnya undifined
var j = "Hallo dunia";

// SEMUA ALIRAN SESAT DIATAS DAPAT DIHILANGKAN MENGGUNAKAN LET DAN CONST TERIMAKASIH

// Jika Isi variabel tidak berubah gunakan const dan jika sering berubah gunakan let

//Gunakan Metode Imutable Jika ingin mengubah value const
const mhs = {
  nama: "Fikri",
  umur: 10,
};
// mhs = {
//   nama: "rudi",
// }; jika kalian Gunakan cara ini hasilnya akan error

mhs.nama = "rudi"; //Gunakan cara ini untuk mengubah object pada variabel const
console.log(mhs);

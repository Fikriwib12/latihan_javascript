// let k = ''
// for(let i = 10; i > 0; i--){
//     for(let j = 0; j < i; j++){
//         k += '*'
//     }
//     k += '\n'
// }

// console.log(k)


// for(let i = 0; i < 5 ; i++){
//     console.log(`nomor di dalam i adalah : ${i}`)
//     for(let j = 0; j < 5; j++){
//         console.log(`j adalah : ${j}`)
//     }
// }

// function printTriangle(height) {
//     for (let i = 1; i <= height; i++) {
//       let row = '';
      
//       // Menambahkan spasi di awal setiap baris
//       for (let j = 1; j <= height - i; j++) {
//         row += 'k';
//       }
      
//       // Menambahkan bintang untuk setiap baris
//       for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//       }
  
//       console.log(row);
//     }
//   }
  
//   // Contoh: Mencetak segitiga dengan tinggi 5
//   printTriangle(4);
  
// let hasil = ''

// for(let i = 0 ; i < 5; i++){
//     hasil = ''
//     for (let j = 0; j < 5 - i - 1; j++) {
//         hasil += 'j';
//     }
//     for(let k = 0; k < 2*i+1 ; k++){
//         hasil += '*'
//     }
//     console.log(hasil)   
//}

// document.write("- Piramida 1<br>");
//     for (var i=1;i<=5;i++){
//         for (var j=i;j<=5;j++){
//             document.write("_");
//         }
//         for (var k=1;k<=i;k++){
//             document.write("*");
//         }
//         for (var l=1;l<=i-1;l++){
//             document.write("*");
//         }
//         document.write("<br>");
//     }

// var tinggi = 5;


// var tinggi = 5;

// // Loop untuk setiap baris
// for (var i = 1; i <= tinggi; i++) {
//   // Loop untuk menambahkan spasi di setiap baris
//   for (var j = tinggi; j > i; j--) {
//     document.write("&nbsp;");
//   }

//   // Loop untuk menambahkan bintang di setiap baris
//   for (var k = 1; k <=  i ; k++) {
//     document.write("*");
//   }

//   // Pindah ke baris baru setelah setiap baris selesai
//   document.write("<br>");
// }


var tinggi = 5;

// Loop untuk setiap baris bagian atas
for (var i = 1; i <= tinggi; i++) {
  // Loop untuk menambahkan spasi di setiap baris bagian atas
  for (var j = tinggi; j > i; j--) {
    document.write("&nbsp;");
  }

  // Loop untuk menambahkan bintang di setiap baris bagian atas
  for (var k = 1; k <= 2 * i - 1; k++) {
    document.write("*");
  }

  // Pindah ke baris baru setelah setiap baris selesai
  document.write("<br>");
}

// Loop untuk setiap baris bagian bawah
for (var i = tinggi - 1; i >= 1; i--) {
  // Loop untuk menambahkan spasi di setiap baris bagian bawah
  for (var j = tinggi - i; j > 0; j--) {
    document.write("&nbsp;");
  }

  // Loop untuk menambahkan bintang di setiap baris bagian bawah
  for (var k = 1; k <= 2 * i - 1; k++) {
    document.write("*");
  }

  // Pindah ke baris baru setelah setiap baris selesai
  document.write("<br>");
}




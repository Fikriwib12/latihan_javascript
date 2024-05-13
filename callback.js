// callback
// synchronous
// menggunakan function biasa
//   function halo(nama) {
//     alert(`hello ${nama}`);
//   }

//   function tampilkanPesan(callback) {
//     const nama = prompt("Masukan Nama :");
//     callback(nama);
//   }

//   tampilkanPesan((nama) => {
//     alert(`Halo ${nama}`);
//   }); menggunakan arrow function

//   const mhs = [
//     {
//       nama: "fikri",
//       nim: "1212121",
//       id: 1,
//     },
//     {
//       nama: "budi",
//       nim: "1313131",
//       id: 2,
//     },
//     {
//       nama: "risman",
//       nim: "1414141",
//       id: 3,
//     },
//   ];
//   console.log("mulai");
//   mhs.forEach((m) => {
//     for (let i = 0; i < 10000000; i++) {
//       let date = new Date();
//     }
//     console.log(m.nama);
//   });
//   console.log("selesai");

//asycnhronous callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }
// console.log("mulai");
// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach((m) => {
//       console.log(m.nama);
//     });
//   },
//   () => {}
// );

// console.log("selesai");

//Jquery
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => {
      console.log(m.nama);
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");

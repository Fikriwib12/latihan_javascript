// menggunakan jquery
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (movies) => console.log(movies),
// });

// menggunakan fetch
// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// promise
// object yang mempresentasikan berhasil atau gagal di dalam async di waktu mendatang
// janji (ingkar/berhasil)
// keadaaan atau states (fulfilled / rejected / pending )
//callback (reslove / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji ditepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// janji
//   .then((response) => console.log("ok :" + response))
//   .catch((response) => console.log("Not Ok :" + response));

//contoh 2
// let ditepati = false;
// let janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Janji DItepati dalam beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Janji Tidak Ditepati dalam beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then((response) => console.log("OK :" + response))
//   .catch((response) => console.log("Not OK :" + response));
// console.log("selesai");

// Promise all
const film = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Fikri",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Fikri",
      },
    ]);
  }, 500);
});

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
}); // bisa gunakan spread operator agar tidak memangil array berulang

// Menggunakan Jquery
// $('.search-button').on('click', function(){
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=f9a8260d&s=" + $('.input-keyword').val(),
//     success: (result) => {
//       const movies = result.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       $(".movie-container").html(cards);

//       //detail button click
//       $(".btn-detail").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=f9a8260d&i=" + $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });

// })

// Menggunakan Fecth
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");

//   fetch("http://www.omdbapi.com/?apikey=f9a8260d&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCards(m)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       //fungsi detail
//       const modalDetailButton = document.querySelectorAll(".btn-detail");
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=f9a8260d&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetail = showMovieDetail(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// refactoring fetch
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movies = getMovies(inputKeyword.value);
});
function getMovies(keyword) {
  fetch("http://www.omdbapi.com/?apikey=f9a8260d&i=" + imdbid)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function showCards(m) {
  return `<div class="col-md-4 my-5">
  <div class="card">
    <img src="${m.Poster}" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">${m.Title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
      <a href="#" class="btn btn-primary btn-detail"  data-bs-toggle="modal"
      data-bs-target="#detailMovieModal" data-imdbid="${m.imdbID}">Show Detail</a>
    </div>
  </div>
</div>`;
}

function showMovieDetail(m) {
  return `  <div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${m.Poster}" alt="" class="img-fluid" />
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
        <li class="list-group-item">
          <strong>Director :</strong>${m.Director}
        </li>
        <li class="list-group-item">
          <strong>Actor :</strong>${m.Actors}
        </li>
        <li class="list-group-item">
          <strong>Writer :</strong>${m.Writer}
        </li>
        <li class="list-group-item"><strong>Plot :</strong>${m.Plot}</li>
      </ul>
    </div>
  </div>
</div>`;
}

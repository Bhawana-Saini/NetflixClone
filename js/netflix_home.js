window.addEventListener("scroll", function () {
  var nav = this.document.querySelector("nav");
  nav.classList.toggle("active", window.scrollY > 0);
})









// API KEY 
const API = "api_key=0d7fcb538472b4a248392fdaf9ae8532";

// base url 
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300";

// movie request 
const requests = {
  fetchTrending: `${base_url}/trending/all/week?${API}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${API}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${API}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${API}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${API}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${API}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${API}&with_genres=99`,
};

// truncate string
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// banner 
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {

    // refresh movie change 
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("bannerTitle");
    var banner_desc = document.getElementById("bannerDescription");

    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;


  });

//  movie row 
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {
    const head_row = document.getElementById("main-row");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    head_row.appendChild(row);

    const title = document.createElement("h2");
    title.className = "rowTitle";
    title.innerText = "NETFLIX ORIGINALS";

    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "rowPoster";
    row.appendChild(row_poster);


    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row_posterLarge";

      var s = movie.name.replace(/\s+/g, "");


      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_poster.appendChild(poster);

    });
  });


//  trending  top rated

fetch(requests.fetchTrending)
  .then((res) => res.json())


  .then((data) => {
    const head_row = document.getElementById("main-row");
    const row = document.createElement("div");
    row.className = "row";

    head_row.appendChild(row);

    const title = document.createElement("h2");
    title.className = "rowTitle";
    title.innerText = "Top Rated";

    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "rowPoster";
    row.appendChild(row_poster);


    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row_posterLarge";

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_poster.appendChild(poster);

    });

  });


// action 

fetch(requests.fetchActionMovies)
  .then((res) => res.json())


  .then((data) => {
    const head_row = document.getElementById("main-row");
    const row = document.createElement("div");
    row.className = "row";

    head_row.appendChild(row);

    const title = document.createElement("h2");
    title.className = "rowTitle";
    title.innerText = "Action Movies";

    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "rowPoster";
    row.appendChild(row_poster);


    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row_poster";

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);

    });

  });


// comedy 

fetch(requests.fetchComedyMovies)
  .then((res) => res.json())


  .then((data) => {
    const head_row = document.getElementById("main-row");
    const row = document.createElement("div");
    row.className = "row";

    head_row.appendChild(row);

    const title = document.createElement("h2");
    title.className = "rowTitle";
    title.innerText = "Comedy Movies";

    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "rowPoster";
    row.appendChild(row_poster);


    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row_poster";

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);

    });

  });

// horror 

fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())


  .then((data) => {
    const head_row = document.getElementById("main-row");
    const row = document.createElement("div");
    row.className = "row";

    head_row.appendChild(row);

    const title = document.createElement("h2");
    title.className = "rowTitle";
    title.innerText = "Horror Movies";

    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "rowPoster";
    row.appendChild(row_poster);


    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row_poster";

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);

    });

  });

// romance 

fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())


  .then((data) => {
    const head_row = document.getElementById("main-row");
    const row = document.createElement("div");
    row.className = "row";

    head_row.appendChild(row);

    const title = document.createElement("h2");
    title.className = "rowTitle";
    title.innerText = "Romance Movies";

    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "rowPoster";
    row.appendChild(row_poster);


    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row_poster";

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);

    });

  });

// documentory 


fetch(requests.fetchDocumentaries)
  .then((res) => res.json())


  .then((data) => {
    const head_row = document.getElementById("main-row");
    const row = document.createElement("div");
    row.className = "row";

    head_row.appendChild(row);

    const title = document.createElement("h2");
    title.className = "rowTitle";
    title.innerText = "Documentaries";

    row.appendChild(title);

    const row_poster = document.createElement("div");
    row_poster.className = "rowPoster";
    row.appendChild(row_poster);


    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row_poster";

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_poster.appendChild(poster);

    });

  });

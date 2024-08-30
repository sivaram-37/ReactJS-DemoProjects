const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const userInputs = document.querySelectorAll("input");

let movies = [];

const clearUserInputs = () => {
  for (const inp of userInputs) {
    inp.value = "";
  }
};

const renderMovies = (filterTerm = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies = !filterTerm
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filterTerm));

  for (const movie of filteredMovies) {
    const li = document.createElement("li");
    // const { title } = movie.info;
    let { changeTitleToUpperCase } = movie;
    // changeTitleToUpperCase = changeTitleToUpperCase.bind(movie);
    let text = changeTitleToUpperCase.call(movie) + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text += `${key} : ${movie.info[key]}`;
      }
    }
    li.textContent = text;
    movieList.append(li);
  }
};

const addMovieHandler = () => {
  const title = userInputs[0].value;
  const extraName = userInputs[1].value;
  const extraValue = userInputs[2].value;

  if (title.trim() === "" || extraName.trim() === "" || extraValue.trim() === "") {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
    changeTitleToUpperCase() {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  console.log(newMovie);
  clearUserInputs();
  renderMovies();
};

const searchFilterHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchFilterHandler);

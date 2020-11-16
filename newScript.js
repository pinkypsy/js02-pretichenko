const numberOfFilms = +prompt("Сколько фильмов?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastWatched = prompt("Last watched?", ""),
      score = prompt("Score?", ""),
      a = prompt("Last watched?", ""),
      b = prompt("Score?", "");

personalMovieDB.movies[lastWatched] = score;



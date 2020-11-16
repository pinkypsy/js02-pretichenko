'use strict';

const numberOfFilms = prompt("Сколько фильмов?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


for (let i = 0; i < 2; i++) {
    const lastWatchedFilm = prompt("Last watched?", ""),
        score = +prompt("Score?", "");

        if (lastWatchedFilm != null && score != null && lastWatchedFilm != "" && score != "" && lastWatchedFilm.length < 50){
            personalMovieDB.movies[lastWatchedFilm] = score;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }

        if (personalMovieDB.count < 10){
            console.log("Мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Классический зритель");
        } else if (personalMovieDB.count >= 30){
            console.log("Киноман");
        } else {
            console.log("Error")
        }
    }

console.log(personalMovieDB);
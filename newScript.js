'use strict';

let numberOfFilms;

function start() {

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    isPrivate: false
};

function rememberStat() {
    for (let i = 0; i < 2; i++) {
        const lastWatchedFilm = prompt("Last watched?", ""),
            score = +prompt("Score?", "");

        if (lastWatchedFilm != null && score != null && lastWatchedFilm != "" && score != "" && lastWatchedFilm.length < 50) {
            personalMovieDB.movies[lastWatchedFilm] = score;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }

    function checkPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Киноман");
        } else {
            console.log("Error")
        }
    }
}

rememberStat();

function showMyDB(isPrivate){
    if (!isPrivate){
        console.log(personalMovieDB);
    }
}


function writeGenres(){
    for (let i = 0; i < 2; i++){
        personalMovieDB.genres[i] = prompt(`Любимые жанр под номером ${i+1}`);
    }
}

writeGenres();

showMyDB(personalMovieDB.isPrivate);
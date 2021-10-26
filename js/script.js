"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?!","");

const peronalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const nameMovie = prompt("Один из последних просмотренных фильмов?!","");
    const degree = prompt("На сколько оцените его?!","");
    peronalMovieDB.movies[nameMovie] = degree;
}


console.log(peronalMovieDB)


'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let oneOfTheFilms = prompt("Один из последних просмотренных фильмов?", "");
let аssessmentOfTheFilms = prompt("На сколько оцените его?", "");
personalMovieDB.movies[oneOfTheFilms] = аssessmentOfTheFilms;

oneOfTheFilms = prompt("Один из последних просмотренных фильмов?", "");
аssessmentOfTheFilms = prompt("На сколько оцените его?", "");
personalMovieDB.movies[oneOfTheFilms] = аssessmentOfTheFilms;

console.log(personalMovieDB);
'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while (personalMovieDB.count == " " || personalMovieDB.count == null ||
            isNaN(personalMovieDB.count) || personalMovieDB.count == undefined) {
                personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?", "").trim;
            let b = prompt("На сколько оцените его?", "").trim;
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            }
            else {
                console.log("error");
                i--;
            };
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count >= 10) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden){
        if (!hidden) console.log(personalMovieDB);
    },
    writeYourGeneris: function(){
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if( genre === '' || genre == null){
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre; 
            } 
        }
        personalMovieDB.genres.forEach((item, i) => {
                        console.log(`Любимый жанр ${i + 1} - это ${item}`);
                    });

    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};


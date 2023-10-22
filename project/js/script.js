/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      moveList = document.querySelector(".promo__interactive-list"),
      form = document.querySelector('.add'),
      addInput = form.querySelector('.adding__input'),
      checkbox = form.querySelector('[type="checkbox"]');
    

adv.forEach(function (item) {
    item.remove();
});

genre.textContent = "ДРАМА";
poster.style.backgroundImage = "url('img/bg.jpg')";

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(addInput.value){
        movieDB.movies.push(pruningTheLine(addInput.value, 21));
    }
    if(checkbox.checked) console.log("Добавляем любимый фильм");
    
    vievMovies();
});


function pruningTheLine(str, n){
    if(str.length > n){
        return str.slice(0, n) + "...";
    } else {
        return str
    }
}

function vievMovies(){
    moveList.innerHTML = "";
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) =>{
    moveList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `;
    }); 

    document.querySelectorAll('.delete').forEach((btn, i) =>{
        btn.addEventListener('click', function(){
            movieDB.movies.splice(i, 1);      
            vievMovies();
        });
    });  
}

vievMovies();







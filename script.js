'use strict';

let numberOfFilms;

// функция start в которой спрашиваем у пользователя кол-во просмотренных фильмов
// проверяем на пустой ввод, отмену или ввода не числа

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  }
}

start();



const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


// функция rememberMyFilms, которая спрашивает 2 вопроса по 2 раза через цикл
// если введенные данные не удовл. условию, то вопросы задаются снова

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {

    const a = prompt('Один из последних просмотренных фильмов?'),
      b = prompt('На сколько оцените его?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();



// функция detectPersonalLevel, которая анализирует значение count 
// в зависимости от значения выводит в консоль обратную связь


function detectPersonalLevel() {

  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы - киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

console.log(personalMovieDB);
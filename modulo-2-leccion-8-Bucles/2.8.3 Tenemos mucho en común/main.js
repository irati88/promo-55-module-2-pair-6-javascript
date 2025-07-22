"use strict";

console.log("Tamoh ready");

const inputOne = document.querySelector('.input--one');
const inputTwo = document.querySelector('.input--two');
const buttonBook = document.querySelector('.button--book');
const paragraphBook = document.querySelector('.paragraph--book');

const books = [];

const handleClick = () => {
    console.log('Botón pulsado');
    const resultOne = inputOne.value;
    const resultTwo = inputTwo.value;
    books.push(resultOne, resultTwo);
    for (const book of books) {
        paragraphBook.innerHTML = ('¡A mí tambien me encantó' + ' ' + book +  ' ' + 'tenemos mucho en común, humana!');
    }
};
buttonBook.addEventListener('click', handleClick);

"use strict";

console.log(">> Ready :");

const button = document.querySelector('.button');
const text = document.querySelector('.count');

let count = 0;

const incrementCount = () => {
    count++;
    text.innerHTML = count;
};

button.addEventListener('click', incrementCount); //en el incrementCount no pongo parentesis xq lo ejecuta el  addEven...

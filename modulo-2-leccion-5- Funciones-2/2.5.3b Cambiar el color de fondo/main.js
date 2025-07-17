"use strict";

console.log(">> Ready :");

const colors = ["#ffbbacff", "#a0ffb2ff", "#a4b5ffff", "#ffeea9ff", "#e7b7faff"];
const button = document.querySelector('.button');

const colorRandom = () => {
    const index = Math.floor(Math.random() * colors.length);
    const selectColor = colors[index];
    document.body.style.backgroundColor = selectColor;
};

button.addEventListener('click', colorRandom);
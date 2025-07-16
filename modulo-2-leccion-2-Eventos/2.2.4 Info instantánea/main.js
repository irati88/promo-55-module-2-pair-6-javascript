"use strict";

const nameInput = document.querySelector('.text-input');
const resultInput = document.querySelector('.my-paragraph');

nameInput.addEventListener('input', (event) => {

    const userName = event.currentTarget.value;
    resultInput.innerHTML = userName;
});

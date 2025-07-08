'use strict';

// 1. Control de acceso

const input = document.querySelector('input')
const p = document.querySelector('p');
const button = document.querySelector('.alert');

button.addEventListener('click',() => {
    console.log('Has hecho click');

    const userName = input.value.toLowerCase();
    console.log(userName);

    if (userName === 'maría' || userName === 'luisa') {
        p.innerHTML = 'Bienvenida, ' + userName
    } else {
        p.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado';
    }
});


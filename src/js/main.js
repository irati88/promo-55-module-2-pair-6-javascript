'use strict';

// 1. Mensaje de navegador obsoleto

document.querySelector('h1').innerHTML
console.log('Estás mostando el h1');



// 2. Hola Mundo



// 3. Seleccionando Adalabers



// 4. Lorem ipsum


// 5. Arreglando errores


// Segunda parte//

//1.-Cómo te llamas?//

const inputNombre = document.querySelector('.nombreInput');
const botonSaludar = document.querySelector('.helloBtn');
const spanMessage = document.querySelector('.message');
botonSaludar.addEventListener('click', () => {
    const nombre = inputNombre.value;
    spanMessage.innerHTML = 'Hola ' + nombre;
    console.log('Estás escribiendo en el input');
});


//2.- Cambia el estilo de un botón//

const myButton = document.querySelector('.button');
myButton.addEventListener("click", (event) => {
    myButton.classList.toggle('active');
    console.log("Has hecho click");
})
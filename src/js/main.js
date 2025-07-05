'use strict';

// 1. Mensaje de navegador obsoleto

document.querySelector("h1").innerHTML = "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";
console.log('Estás mostrando el h1');

// 2. Hola Mundo

document.querySelector(".paragraph").innerHTML = "Hola Mundo";
console.log('Estás cambiando el párrafo');

// 3. Seleccionando Adalabers

// 4. Lorem ipsum

// 5. Arreglando errores

// 6. Deshabilitando botones


// EVENTOS//

//1.-Cómo te llamas?//

const inputNombre = document.querySelector('.nombreInput');
const botonSaludar = document.querySelector('.helloBtn');
const spanMessage = document.querySelector('.message');
botonSaludar.addEventListener('click', () => {
    const nombre = inputNombre.value;
    spanMessage.innerHTML = 'Hola ' + nombre;
    console.log('Estás escribiendo en el input');
});


// //2.- Cambia el estilo de un botón//

const myButton = document.querySelector('.button');
myButton.addEventListener("click", (event) => {
    myButton.classList.toggle('active');
    console.log("Has hecho click");
})
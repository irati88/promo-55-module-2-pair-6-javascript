"use strict";

// EJERCICIOS EVENTOS //

// 1. Mensaje de navegador obsoleto

document.querySelector("h1").innerHTML =
  "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";
console.log("Estás mostrando el h1");

// 2. Hola Mundo

document.querySelector(".paragraph").innerHTML = "Hola Mundo";
console.log("Estás cambiando el párrafo");

// 3. Seleccionando Adalabers

const list = document.querySelector(".list");
document.querySelector(".adalaber-two").classList.add("hidden");

console.log("Estás seleccionando una persona de la lista");
// 4. Lorem ipsum

// 5. Arreglando errores

let myAddress = "Madrid, 28009";
myAddress = "Valladolid, 47009";

// 6. Deshabilitando botones

document.querySelector(".second-button").style.opacity = "0.5";

// EJERCICIOS EVENTOS//

//1.-Cómo te llamas?//

const inputNombre = document.querySelector(".nombreInput");
const botonSaludar = document.querySelector(".helloBtn");
const spanMessage = document.querySelector(".message");
botonSaludar.addEventListener("click", () => {
  const nombre = inputNombre.value;
  spanMessage.innerHTML = "Hola " + nombre;
  console.log("Estás escribiendo en el input");
});

//2.- Cambia el estilo de un botón//

const myButton = document.querySelector(".button");
myButton.addEventListener("click", (event) => {
  myButton.classList.toggle("active");
  console.log("Has hecho click");
});

// 3.- Dame ipsum

// 4.- Información instantánea

// 5.-  Estilo para un botón

const submitButton = document.querySelector(".buttons");
submitButton.addEventListener("click", (event) => {
  document.querySelector(".buttons").style.backgroundColor = "red";

  console.log("Estás cambiando el color de un botón");
});

// 6.- ¿Qué vemos esta noche?

const theButton = document.querySelector(".start-button");
const lists = document.querySelector("movie-list");

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

document.querySelector(".movie-list").innerHTML =
  "<li>Inception</li><li>The butterfly effect</li><li>Eternal sunshine of the spotless mind</li><li>Blue velvet</li><li>Split</li>";
theButton.addEventListener("click", () => {
  console.log("Empezar");

  list.innerHTML = "<li>" + inception + "</li>";
  list.innerHTML = "<li>" + theButterFlyEffect + "</li>";
  list.innerHTML = "<li>" + eternalSunshineOfTheSM + "</li>";
  list.innerHTML = "<li>" + blueVelvet + "</li>";
  list.innerHTML = "<li>" + split + "</li>";
});

// EJERCICIOS CONDICIONALES //

// 1.- Control de acesso

const input = document.querySelector("input");
const p = document.querySelector("p");
const access = document.querySelector(".alert");

access.addEventListener("click", () => {
  console.log("Has hecho click");

  const userName = input.value.toLowerCase();
  console.log(userName);

  if (userName === "maría" || userName === "luisa") {
    p.innerHTML = "Bienvenida, " + userName;
  } else {
    p.innerHTML =
      "Lo siento pero el usuario que has introducido no está registrado";
  }
});

// 2.- Prepara una variable cuyo valor será un número.

const numero = 51;

if (numero === 0) {
  console.log("El número es 0");
} else if (numero < 0) {
  console.log("El número es negativo");
} else if (numero + 2 < 13 && numero >= 20) {
  console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (numero > 20 && numero < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}

// 3. Nadie sin avatar

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

// 4. Conversor de edad de perro a humano

document.querySelector(".humanAge");
document.querySelector("dogAge");

const dogAge = 5;
let humanAge;

if (dogAge === 1);
humanAge = 15;

if ((dogAge = 2));
humanAge = 9;

if ((dogAge = 3));
humanAge = dogAge * 5;

console.log("dog age", dogAge);

// 5. Recomendar de recetas

// 6. Año bisiesto

// EJERCICIOS TIPOS DE DATOS //

// 1. "Trasteando" la consola
// Abre la consola y haz las siguientes pruebas:
//Realiza una suma sencilla con nuestro número favorito y el de nuestra compañera y pulsa Intro.
//Haz lo mismo, pero guardando los números en constantes y utilizando estas para sumar.

// 2. Dayana mola

const superWave = document.querySelector(".super-wave");

// 3. El precio de la fruta

// 4. Calcular el número total de horas que hemos vivido
// Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.

// 5. Lista de perretes
// Pinta tres elementos li dentro de una lista ul con la información de perritos: un nombre y una foto.

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

// 6. Cuántas letras tiene tu nombre

// 7. String plus number

2 + 3 + "5";

"2" + 3 + 5;

123;

("123");

// EJERCICIOS FUNCIONES I //

// 1. Multiplicación, Media y Pares
// Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().

function numberResult(a, b) {
  console.log(a * b);
}
numberResult(10, 5);

// Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

function mediaNumber(a, b, c, d) {
  console.log((2 + 4 + 6 + 8) / 4);
}
mediaNumber((2 + 4 + 6 + 8) / 4);

// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar. Ejecútala e imprime el resultado para comprobar que funciona.

function isEven(a) {
  console.log(a % 2 === 0);
  return isEven % 2 === 0;
}
isEven(6);

// 2. Ticket con IVA
//Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".

function price(basePrice) {
  const iva = basePrice * 0.21;
  const total = basePrice + iva;
  console.log(`Precio sin IVA: ${basePrice}`, `IVA: ${iva}`, `Total: ${total}`);
}
price(1000);

// 3. Variables globales

let secretLetter = "y";

function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"

// EXTRA 1

// querySelector para todas

function getEl(selector) {
  return document.querySelector(selector);
}

const btnEl = getEl(".btn");
console.log(btnEl);
btnEl.style.backgroundColor = "black";

const h1El = getEl("h1");
console.log(h1El);
h1El.style.backgroundColor = "grey";

// EXTRA 2

// Logueando errores

const el = document.querySelector(selector);

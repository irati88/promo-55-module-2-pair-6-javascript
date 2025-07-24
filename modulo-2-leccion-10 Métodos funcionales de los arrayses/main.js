"use strict";

console.log("Tamoh ready");

// Ejercicios .map()
// 1. Inflar las notas
const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map((mark) => {
  return mark + 1;
});

console.log(inflatedMarks);
console.log('*******************');
// 2. Saludar es de buena educación
const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];

const greetings = names.map((name) => `Bienvenida ${name}`);

console.log(greetings);
console.log('*******************');
// 3. Gracias por confiar en nosotros
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

users.map((users, i) => {
    if(users.isPremium === true){
        console.log(`Bienvenida ${users.name}, gracias por confiar en nosotras.`)
    } else {
        console.log(`Bienvenida ${users.name}`)
    }
});

console.log('*******************');
// Ejercicios .filter()
// 1. Solo los premium
const premiumUsers = users.filter((user) => {
  return user.isPremium === true;
});

console.log(premiumUsers);
console.log('*******************');

// 2. Los pares pueden entrar
const pins = [2389, 2384, 2837, 5232, 8998];

const pairPins = pins.filter((pin) => {
  return pin % 2 === 0;
});

console.log(pairPins);
console.log('*******************');

// 3. Los usuarios que pueden entrar
const usersPins = [
{ name: "María", isPremium: false, pin: 2389 },
{ name: "Lucía", isPremium: true, pin: 2384 },
{ name: "Susana", isPremium: true, pin: 2837 },
{ name: "Rocío", isPremium: false, pin: 5232 },
{ name: "Inmaculada", isPremium: false, pin: 8998 },
];

const usersPairPins = usersPins.filter((pin) => {
  return pin % 2 === 0 && true;
});

console.log(usersPairPins);
console.log('*******************');

// Ya hemos conseguido las contraseñas pertenecientes a cada usuario. ¿Podrías darnos un
// array con los usuarios que pueden acceder a la aplicación, es decir, los que tienen como
// PIN un número par?

// Ejercicios .find() y .findIndex()
// 1. Encuentra el usuario
// a) En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al
// PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder
// contactarle? Usa el método find para conseguirlo.
// Copy
// JavaScript
//  const users = [
// { name: "María", isPremium: false, pin: 2389 },
// { name: "Lucía", isPremium: true, pin: 2384 },
// { name: "Susana", isPremium: true, pin: 2837 },
// { name: "Rocío", isPremium: false, pin: 5232 },
// { name: "Inmaculada", isPremium: false, pin: 8998 },
// ];
// b) Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array
// de usuarios? Usa el método findIndex para encontrar su posición y bórralo usando
// splice.
// Ejercicio 1: con el map

//Ejercicio 2: pos con el map también

// Ejercicio 3: tenemos que crear un nuevo array con los saludos si es premiun, lo hacemos con un if dentro. tambien se le mete un map

// Ejercicio 4: .filter

// Ejercicio 4.2: si el pin es par va al nuevo array

// Ejercicio find findIndex: los metodos se puede encadenar,

const students = [
  {
    name: "Ana",
  },
  {
    name: "Pedro",
  },
  {
    name: "María",
  },
];
students.findIndex((student) => student.name === "Ana"); // Devuelve el índice del primer elemento que cumple con la condición especificada

// Ejerecicio sort: ordenar los nombres de los estudiantes alfabéticamente y por el numero de pin.

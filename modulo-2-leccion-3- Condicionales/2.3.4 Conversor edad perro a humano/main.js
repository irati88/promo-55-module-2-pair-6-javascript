"use strict";

document.querySelector(".human-age");
document.querySelector(".dog-age");

const dogAge = 5;
let humanAge;

if (dogAge === 1) {
  humanAge = 15;

// - El primer año de un perro equivale a 15 años de humano

} else if (dogAge === 2) {
  humanAge = 15 + 9;

// - El segundo año de un perro equivale a nueve años de humano 

} else {
  humanAge = 15 + 9 + (dogAge - 2) * 5;
}

// - A partir del tercero, cada año de perro equivale a 5 años de humano.

console.log(
  `${dogAge} años de un perruno equivalen a ${humanAge} años de un humano.`
);

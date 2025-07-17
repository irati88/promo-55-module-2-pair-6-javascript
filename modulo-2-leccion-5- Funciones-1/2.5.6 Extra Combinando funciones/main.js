"use strict";

console.log(">> Ready :");

function getEl(selector) {
  const el = document.querySelector(selector);
  if (!el) {
    console.error(`No existe ningún elemento con el selector: ${selector}`);
  }
  return el;
}

function isEven(num) {
  return num % 2 === 0;
}

const paragraph = getEl("p");
const value = paragraph.innerHTML;
const number = parseInt(value);

if (isEven(number)) {
  console.log(`Este número es PAR: ${number}`);
} else {
  console.log(`Este número es IMPAR: ${number}`);
}

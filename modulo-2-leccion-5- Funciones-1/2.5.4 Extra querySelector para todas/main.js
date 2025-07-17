"use strict";

console.log(">> Ready :");

function getEl(selector) {
  return document.querySelector(selector);
}

const btnEl = getEl(".btn");
console.log(btnEl);
btnEl.style.backgroundColor = "grey";

const h1El = getEl("h1");
console.log(h1El);
h1El.style.backgroundColor = "grey";

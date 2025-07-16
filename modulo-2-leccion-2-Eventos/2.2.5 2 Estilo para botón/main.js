"use strict";

const firstBtn = document.querySelector(".first-button");
const secondBtn = document.querySelector(".second-button");

firstBtn.addEventListener("click", () => {
  firstBtn.classList.toggle("clicked-button");
  console.log("Has hecho click");
});

secondBtn.addEventListener("click", () => {
  secondBtn.classList.toggle("clicked-button");
  console.log("Has hecho click");
});
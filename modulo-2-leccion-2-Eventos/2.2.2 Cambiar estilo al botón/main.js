"use strict";

const myButton = document.querySelector(".button");
myButton.addEventListener("click", () => {
  myButton.classList.toggle("active");
  console.log("Has hecho click");
});

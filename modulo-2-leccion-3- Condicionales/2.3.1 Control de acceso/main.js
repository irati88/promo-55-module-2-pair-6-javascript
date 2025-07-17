"use strict";

const input = document.querySelector(".access-input");
const p = document.querySelector("p");
const button = document.querySelector(".alert");

button.addEventListener("click", () => {
  console.log("Has hecho click");

  const userName = input.value.toLocaleLowerCase();
  console.log(userName);

  if (userName === "maria" || userName === "luisa") {
    p.innerHTML = "Bienvenida, " + userName;
  } else {
    p.innerHTML =
      "Lo siento pero el usuario que has introducido no está registrado";
  }
});

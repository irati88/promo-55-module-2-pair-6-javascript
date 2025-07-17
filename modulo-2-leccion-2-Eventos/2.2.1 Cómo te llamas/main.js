"use strict";

const inputNombre = document.querySelector(".nameInput");
const botonSaludar = document.querySelector(".helloBtn");
const spanMessage = document.querySelector(".message");
botonSaludar.addEventListener("click", () => {
  const nombre = inputNombre.value;
  spanMessage.innerHTML = "Hola " + nombre;
  console.log("Estás escribiendo en el input");
});

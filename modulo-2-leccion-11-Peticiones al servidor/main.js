"use strict";

console.log("Tamoh ready");

// Ejercicios FETCH //

// 1. Generar número aleatorio

fetch("https://api.rand.fun/number/integer")
  .then((response) => response.json())
  .then((data) => {
    console.log("Número aleatorio", data);
  });

// Ejercicios JSON //

// 1. Chihuahas, chihuahas por todas partes

const button = document.querySelector(".chihua--button");
const img = document.querySelector(".dog");

const getChihuahua = () => {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      console.log("CHIHUAHUAS", data);
      img.src = data.message;
    });
};

button.addEventListener("click", getChihuahua);

// 2. API de usuarios de GitHub

const gitButton = document.querySelector(".find--button");
const gitInput = document.querySelector(".git--input");
const gitName = document.querySelector(".git--name");
const gitRepos = document.querySelector(".git--repos");
const gitAvatar = document.querySelector(".git--avatar");

const userButtonInput = () => {
  fetch("https://api.github.com/users/gootyfer")
    .then((response) => response.json())
    .then((data) => {
      console.log("INPUT", data);
      gitName.innerHTML = "Nombre: " + data.name;
      gitRepos.innerHTML = "Número de repositorios: " + data.public_repos;
      gitAvatar.src = data.avatar_url;
    });
};

gitButton.addEventListener("click", userButtonInput);

// EJERCICIOS PETICIONES EN PARALELO //

// 1. Pintando varias imágenes a la vez

const picPromise = () => 
  fetch("https://api.github.com/users/gootyfer").then((response) =>
    response.json()
  );
  
const multiPromises = [
  picPromise(),
  picPromise(),
  picPromise(),
  picPromise(),
  picPromise(),
  picPromise(),
  picPromise(),
  picPromise(),
  picPromise(),
  picPromise(),
];

const gitContainer = document.querySelector(".git--container");

Promise.all(multiPromises).then((responses) => {
  console.log(responses);
  
  responses.forEach((response, i) => {
    console.log(".git--avatar" + (i + 1));
    const gitAvatar = document.createElement("img");
    gitAvatar.src = response.avatar_url;
    gitContainer.appendChild(gitAvatar);
  });
});


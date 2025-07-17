"use strict";

console.log("Tamoh ready");

const movies = ["Resplandior", "Dracula de Bram Stoker", "Sonrisas y lagrimas"];

console.log(movies);

const workWithMovies = () => {
  movies.push("Fievel va al oeste");
  console.log(movies);

  movies[2] = "Pretty woman";
  console.log(movies);
};
workWithMovies();
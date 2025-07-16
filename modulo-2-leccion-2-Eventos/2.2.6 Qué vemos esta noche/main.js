"use strict";

const startButton = document.querySelector(".start-button");
const lists = document.querySelector(".movie-list");
const paragraph = document.querySelector(".paragraph");

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

startButton.addEventListener("click", () => {
  lists.innerHTML += "<li>" + inception + "</li>";
  lists.innerHTML += "<li>" + theButterFlyEffect + "</li>";
  lists.innerHTML += "<li>" + eternalSunshineOfTheSM + "</li>";
  lists.innerHTML += "<li>" + blueVelvet + "</li>";
  lists.innerHTML += "<li>" + split + "</li>";

});

lists.addEventListener('click', (event) => {
  const chosenFilm = event.target.textContent; 
  console.log("La peli seleccionada es: " + chosenFilm);

  paragraph.innerHTML = "La peli seleccionada es: " + chosenFilm;
});

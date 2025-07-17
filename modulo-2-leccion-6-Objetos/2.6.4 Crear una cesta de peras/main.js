"use strict";

console.log("Tamoh ready");

const pearsBasket = {
  max: 10,
  min: 0,
  numberOfPears: 3,
  defaultPears: 0,
  addPears: () => {
    if (pearsBasket.numberOfPears <= pearsBasket.max) {
    pearsBasket.numberOfPears++;
  }
},
  decreasePears: () => {
    if (pearsBasket.numberOfPears > pearsBasket.min) {
        pearsBasket.numberOfPears--;
    }
  },
  resetPears: () => {
    pearsBasket.numberOfPears = pearsBasket.defaultPears;
  },
};

const addButton = document.querySelector(".add");
const deleteButton = document.querySelector(".delete");
const resetButton = document.querySelector(".reset");
const pearsText = document.querySelector(".pears");

pearsText.innerHTML = pearsBasket.numberOfPears;

addButton.addEventListener("click", () => {
  pearsBasket.addPears();
  console.log(pearsBasket.numberOfPears);
  pearsText.innerHTML = pearsBasket.numberOfPears;
});

deleteButton.addEventListener("click", () => {
pearsBasket.decreasePears();
  console.log(pearsBasket.numberOfPears);
  pearsText.innerHTML = pearsBasket.numberOfPears;
});

resetButton.addEventListener("click", () => {
pearsBasket.resetPears();
  console.log(pearsBasket.numberOfPears);
  pearsText.innerHTML = pearsBasket.numberOfPears;
});
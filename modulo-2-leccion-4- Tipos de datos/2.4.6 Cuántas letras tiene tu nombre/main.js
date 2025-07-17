"use strict";

console.log("Tamoh ready");

const myFirstText = 'El nombre de mi compañera es '
const mySecondText = ', y está compuesto por '
const myThirdText = ' caracteres';
let friendName = "Leticia Fernández Sánchez";
friendName = "Karen González Sánchez";
const nameLength = friendName.length;

document.querySelector('.name-length').innerHTML = myFirstText + friendName + mySecondText + nameLength + myThirdText;
console.log(myFirstText + friendName + mySecondText + nameLength + myThirdText); 


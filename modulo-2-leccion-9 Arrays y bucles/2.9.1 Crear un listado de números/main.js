"use strict";

console.log("Tamoh ready");

const get100Numbers = () => {
  const numbers = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);    
  };
  return numbers;  
};
const arrayResult = get100Numbers (); //Aqui guardo el retorno de la funcion y la invoco.
console.log(arrayResult);
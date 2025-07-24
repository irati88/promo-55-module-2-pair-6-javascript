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

//1.2

const getReversed100Numbers = () => {
  arrayResult.reverse; // llama y obten el array [1-100]
  return arrayResult.reverse(); // invierte y devuelve
};

const arrayInvertido = getReversed100Numbers();
console.log(arrayInvertido);

console.log("----------------------------------");

// Ejercicio 2: recorrer el array con un bucle si es par lo añadimos al de pares y si no al multiplo de 3, usamos el if else, cuando acabe el buble le ponemos un concat

const lostNumbers = [4, 8, 15, 16, 23, 42];

const bestLostNumber = () => {
  const Pares = [];
  const MultiplosDeTres = [];
  lostNumbers.forEach((Number) => {
    if (Number % 2 === 0) {
      Pares.push(Number);
    }
    if (Number % 3 === 0) {
      MultiplosDeTres.push(Number);
    }
  });
  console.log(Pares);
  console.log(MultiplosDeTres);
  const concateNumbers = Pares.concat(MultiplosDeTres);
  return concateNumbers;  
};
const resulConcat = bestLostNumber();
console.log(resulConcat);

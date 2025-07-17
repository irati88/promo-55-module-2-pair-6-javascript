"use strict";

console.log(">> Ready :");

let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x" sobreescribe porque está llamando a la funcion

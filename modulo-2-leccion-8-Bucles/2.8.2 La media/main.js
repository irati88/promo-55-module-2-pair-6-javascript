//Ejercicio 2

const numbers = [2, 5, 9, 7, 4];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
console.log("Estoy en el elemento ");
console.log("Voy por la vuelta " + i);
acc = acc + numbers[i];
}

console.log("La media del array es " + acc / 5);

numbers.push("10");
console.log("Hemos añadido un número ");

console.log("La nueva media del array es " + acc / 6 );

function average (numbers) {
    let acc = 0;
    for (let i = 0; i < numbers.length; i++) {
    acc = acc + numbers[i];
    }
    return acc / numbers.length
}

console.log(average([2, 5, 9, 7, 4]));
console.log(average([2, 5, 9, 7, 4, 10]));
console.log(average([2, 5, 9]));
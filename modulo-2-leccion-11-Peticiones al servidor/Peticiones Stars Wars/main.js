'use strict';

console.log('>>WoOoOoOaAarRrFfF!! dijo una vez un Wookie');

// Ejercicio Explorar el API Star Wars

// * https://swapi.py4e.com/api/
// * OPEN
// * GET, porque solo vamos a consultar la info
// * http https://swapi.py4e.com/api/people/1/
// * http https://swapi.py4e.com/api/films/
// * http https://swapi.py4e.com/api/starships/9/; http https://swapi.py4e.com/api/species/3/; http https://swapi.py4e.com/api/planets/1/ 
// * https://swapi.py4e.com/api/people
// * /1; /2; /3...
// * Usar el renderizador wookiee es fácil, solo agréguelo ?format=wookieea sus URL: https://swapi.py4e.com/api/planets/1/?format=wookiee


// Ejercicio 2. Buscar un personaje de Star Wars
const input = document.querySelector('.input--search');
const button = document.querySelector('.button--search');
const list = document.querySelector('.list');

const handleclickSearch = () => {
    const inputValue = input.value;
    console.log(inputValue);

    fetch(`https://swapi.py4e.com/api/people/?search=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.results.forEach((item) => {
            list.innerHTML += (`<li>${item.name}, ${item.gender}</li>`);
            console.log(item);
        });
    });

};

button.addEventListener("click", handleclickSearch);


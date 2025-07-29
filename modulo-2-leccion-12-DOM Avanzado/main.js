"use strict";

console.log(">>Po vamonoh mariviá>>");

// Ejercicio 1
console.log('Ejercicio 1')
const numbers = [1, 2, 3];
const container = document.querySelector('.container');

numbers.forEach((number, i) => {
  const liOne = document.createElement("li");
  const liOneContent = document.createTextNode("Númerico");   
  liOne.appendChild(liOneContent); 
  container.appendChild(liOne);
  console.log(numbers)
});

console.log('Ejercicio2')
const select = document.querySelector('.select');

const madrid = document.createElement('img')
const paris = document.createElement('img')
const newYork = document.createElement('img')
const imgMadrid = ['https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltf44912aa75dee020/652e30b0f465d3b2e673b590/Madrid_LP_Header.webp?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=960&height=540',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8Zid7oqnkXMTQn7EIMx2Uos9c7CVOm58sQ&s" alt="Foto Madrid2',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89BNcAUgcGEGbYh96jTJJ6LEuM7uEBJw33w&s" alt="Foto Madrid3',
]
const imgParis = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOi1QOHk4LrbTDHDObT879hLHJIqmcI3pfw&s',]
const imgNewYork = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8PQR9YQHQ1ZZq0uE0N5y6NwJMfk4Jz91Tw&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdLjxEvCKGkitXrWgXV6ZztQTKy9oqvZiew&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuh16aNTbMQaNcmffOHl-J6HWX6QcyxhtBOQ&s',]

madrid.setAttribute('src', imgMadrid)

select.addEventListener('click', () => {
    if(value === 'Madrid'){
        scr.imgMadrid
    }

})
"use strict";

console.log(">>Po vamonoh mariviá>>");

// Ejercicio 1
console.log("Ejercicio 1");
const numbers = [1, 2, 3];
const container = document.querySelector(".container");

numbers.forEach((number, i) => {
  const liOne = document.createElement("li");
  const liOneContent = document.createTextNode("Númerico");
  liOne.appendChild(liOneContent);
  container.appendChild(liOne);
  console.log(numbers);
});

// Ejercicio 2
console.log("Ejercicio 2");

const select = document.querySelector(".input--select");
const containerImages = document.querySelector(".container--img");

const photosOfMadrid = [
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Plaza_Mayor_De_Madrid_%28215862629%29_edited.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/d/df/Barajas_Airport_%28Madrid%29_%284684560779%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Madrid_May_2014-45a_edited.jpg",
];

const photosOfParis = [
  "https://upload.wikimedia.org/wikipedia/commons/b/b3/Notre_Dame_%2839898572641%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Arcdetriomphe_2.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paris_Opera_full_frontal_architecture%2C_May_2009_%28cropped%29.jpg",
];

const photosOfNYC = [
  "https://upload.wikimedia.org/wikipedia/commons/9/9d/NYC_Montage_2014_4_-_Jleon.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/67/Mulberry_Street_NYC_c1900_LOC_3g04637u_edit.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0a/Central_Park_New_York_City_New_York_23_cropped.jpg",
];

const handleInput = () => {
  console.log("Has hecho un cambio");
  const city = select.value;
  console.log("Ciudad", city);

  //Borrar las imagenes del contenedor
  const images = Array.from[containerImages.children];
  if (images.length > 0) {
    console.log("Borrar imágenes");
    images.forEach((img) => img.remove());
  }

  if (city === "Madrid") {
    photosOfMadrid.forEach((photo) => {
      const img = document.createElement("img");
      img.setAttribute("src", photo);
      containerImages.appendChild(img);
    });
  } else if (city === "Paris") {
    photosOfParis.forEach((photo) => {
      const img = document.createElement("img");
      img.setAttribute("src", photo);
      containerImages.appendChild(img);
    });
  } else if (city === "Nueva York") {
    photosOfNYC.forEach((photo) => {
      const img = document.createElement("img");
      img.setAttribute("src", photo);
      containerImages.appendChild(img);
    });
  }
};

select.addEventListener("input", handleInput);

// Ejercicio3
console.log("Ejercicio 3");

const data = [
  {
    name: "Ana",
    lastName: "Corral",
    phone: "111 111 111 111",
  },
  {
    name: "Laura",
    lastName: "Murray",
    phone: "222 222 222 222",
  },
  {
    name: "Silvia",
    lastName: "Benitez",
    phone: "333 333 333 333",
  },
];

const inputName = document.querySelector(".input--name");
const inputLastName = document.querySelector(".input--lastname");
const inputPhone = document.querySelector(".input--tlf");
const selectName = document.querySelector(".input--select--name");

const handleInputName = () => {
  const name = selectName.value;

  const dataName = data.find((item) => item.name === name);

  inputName.value = dataName.name;
  inputLastName.value = dataName.lastName;
  inputPhone.value = dataName.phone;
};

selectName.addEventListener("input", handleInputName);

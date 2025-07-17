"use strict";

console.log(">> Ready :");

const content = document.querySelector('.content');

content.classList.add('bg-low');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  console.log('Estás haciendo scroll', scrollPosition);

  if (scrollPosition >= 250) {
    content.classList.add('bg-high');
    content.classList.remove('bg-low');
  } else {
    content.classList.add('bg-low');
    content.classList.remove('bg-high');
  }
});

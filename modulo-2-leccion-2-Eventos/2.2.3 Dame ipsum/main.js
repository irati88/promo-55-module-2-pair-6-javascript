"use strict";

const textoIpsum = document.querySelector(".ipsumParagraph");

textoIpsum.addEventListener("click", () => {
textoIpsum.innerHTML += '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo vitae reiciendis officia veniam expedita adipisci, molestias quia a harum, aliquam tempore non, magnam dolores enim placeat iure quas dolor eum.</p>';
});

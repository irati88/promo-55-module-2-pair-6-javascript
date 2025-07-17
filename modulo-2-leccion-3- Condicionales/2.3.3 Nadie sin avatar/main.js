"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "./images/defaultAvatar.webp";

// // avatar que eligió el usuario al registrarse
let userAvatar = "https://dev.adalab.es/gato-siames.webp";

//1.Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML
//img cuando cargue la página.

const userAvatarElement = document.querySelector(".user__avatar");

userAvatarElement.src = userAvatar;

//2. Ahora vamos a plantear que userAvatar pueda no contener una URL.
//Llamaremos a la constante "userAvatarElement2" para que no haya conflictos con la anterior

const userAvatarElement2 = document.querySelector(".user__avatar");

userAvatarElement2.src = DEFAULT_AVATAR;

//3. - si tenemos el avatar de la usuaria se muestre este.
// - si no tenemos datos del avatar de la usuaria, se muestre el avatar por defecto.

//Llamaremos a la constante "userAvatarElement3" para que no haya conflictos con las anteriores

userAvatar = "";
const userAvatarElement3 = document.querySelector(".user__avatar");

if (userAvatar !== "") {
  userAvatarElement3.src = userAvatar;
} else {
  userAvatarElement3.src = DEFAULT_AVATAR;
}

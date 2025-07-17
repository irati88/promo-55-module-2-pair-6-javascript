"use strict";

console.log(">> Ready :");

function getEl(selector) {
    const element = document.querySelector(selector);

    if (element === null) {
        console.error(`No existe ningún elemento con clase, id o tag llamado: ${selector}`)
    }
    return element;
};
const btnEl = getEl ('.btm');
console.log(btnEl);

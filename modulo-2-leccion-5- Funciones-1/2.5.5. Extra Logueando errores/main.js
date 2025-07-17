"use strict";

console.log(">> Ready :");

function getEl(selector) {
    const el = document.querySelector(selector);

    if (!el) {
        console.error(`No existe ningún elemento con clase, id o tag llamado: ${selector}`);
    }
    return el;
}
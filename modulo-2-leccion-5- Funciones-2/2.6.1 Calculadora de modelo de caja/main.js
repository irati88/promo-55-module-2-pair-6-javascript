"use strict";

console.log(">> Ready :");

const calculateWidth = (isBorderBox, width, padding, border) => {
    if(isBorderBox) {
        return `El ancho del contenido es ${width}, y el ancho de la caja es ${width}`;
    }   
    const contentSize = width + padding * 2 + border * 2;
    return `El ancho del contenido es ${contentSize}, y el ancho de la caja es ${width}`;
};

const result = calculateWidth(true, 300, 10, 5);
console.log(result);

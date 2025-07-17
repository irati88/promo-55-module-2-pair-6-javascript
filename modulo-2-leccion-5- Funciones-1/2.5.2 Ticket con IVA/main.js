"use strict";

console.log(">> Ready :");

function price(basePrice) {
    const iva = basePrice * 0.21;
    const total = basePrice + iva;

    console.log(`Precio sin IVA: ${basePrice}`, `IVA: ${iva}`, `Total: ${total}`);
}

price(1000);
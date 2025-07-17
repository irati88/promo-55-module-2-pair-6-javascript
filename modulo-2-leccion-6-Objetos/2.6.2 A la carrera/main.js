"use strict";

console.log("Tamoh ready");

const adalaber1 = {
    adalaberName: 'Susana',
    adalaberAge: 34,
    adalaberJob: 'periodista',
};

adalaber1.run = () => {
    console.log("Estoy corriendo");
};

adalaber1.run ();

adalaber1.runAMarathon = (distance) => {
    console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
};

adalaber1.runAMarathon (50);

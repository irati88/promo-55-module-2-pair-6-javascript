"use strict";

console.log("Tamoh ready");

const job = 'developer';
const userPer = {};
    userPer.firstName = 'Mariquita';
    userPer.lastName = 'Pérez';
    userPer.age = 50;
    userPer.job = job;

console.log(userPer);

userPer.firstName = 'Laura';
console.log("userPer actualizado", userPer);

userPer.age += 1;
console.log("userPer actualizado", userPer);

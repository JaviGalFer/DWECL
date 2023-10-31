// IF ELSE SIMPLE

// npm install prompt-sync
// node condicionales1.js

const prompt = require("prompt-sync")();

let edad = Number.parseInt(prompt("Introduce tu edad: ", ""));

if (edad < 15){
    console.log ("Edad menor que 15")
}else {
    console.log ("Edad mayor de 15");
}
console.log("Adios");
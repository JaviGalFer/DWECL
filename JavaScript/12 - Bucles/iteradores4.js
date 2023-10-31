// npm install prompt-sync
// node condicionales1.js
const prompt = require("prompt-sync")();


//foreach para recorrer un arreglo
arreglo_modulos = ['dam', 'daw','asir'];

arreglo_modulos.forEach((elemento, pos) => {
    console.log(elemento);
    console.log(pos);
});

arreglo_modulos.forEach((elto) => console.log(elto));

arreglo_modulos.forEach(elto => console.log(elto));
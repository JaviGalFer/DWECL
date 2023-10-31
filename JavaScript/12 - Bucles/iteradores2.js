// npm install prompt-sync
// node condicionales1.js
const prompt = require("prompt-sync")();

//for recorriendo un array de objetos
const carrito = [
    {nombre: 'TV', precio: 500},
    {nombre: 'lavadora', precio: 600},
    {nombre: 'reloj', precio: 100},
    {nombre: 'monitor', precio: 300},
    {nombre: 'movidote', precio: 250},
];

let elemento;

for (let i = 0; i < carrito.length; i++){
    elemento = carrito[i].nombre;
    precio = carrito[i].precio;
    if (elemento == "movidote") break;
    if (elemento.toLocaleLowerCase().includes("monitor")) continue;
    console.log (elemento + " vale: " + precio);
}
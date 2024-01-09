// npm install prompt-sync
// node condicionales1.js
const prompt = require("prompt-sync")();

//for recorriendo un array de objetos
const carrito = [
    {nombre: 'TV', precio: 500},
    {nombre: 'lavadora', precio: 600},
    {nombre: 'reloj', precio: 100},
    {nombre: 'monitor', precio: 300},
];

// Llamada a las funciones
mostrarcarrito_for();
mostrarcarrito_while();
mostrarcarrito_dowhile();

// Función para recorrer el carrito usando un bucle for
function mostrarcarrito_for() {
    console.log("Recorriendo el carrito usando un bucle for:");
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i].nombre);
    }
}

// Función para recorrer el carrito usando un bucle while
function mostrarcarrito_while() {
    console.log("Recorriendo el carrito usando un bucle while:");
    let i = 0;
    while (i < carrito.length) {
        console.log(carrito[i].nombre);
        i++;
    }
}

// Función para recorrer el carrito usando un bucle do-while
function mostrarcarrito_dowhile() {
    console.log("Recorriendo el carrito usando un bucle do-while:");
    let i = 0;
    do {
        console.log(carrito[i].nombre);
        i++;
    } while (i < carrito.length);
}



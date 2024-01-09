'use strict'

// Declaración de variables
const btn1 = document.querySelector("#boton1");
const btn2 = document.querySelector("#boton2");
const parr1 = document.querySelector("#p1");
const parr2 = document.querySelector("#p2");

console.log("Boton 1: " + btn1);

// Eventos Listener
btn1.addEventListener("click",() => {
    // parr1.innerHTML = "Hola qué tal";
    escribirDOM("Hola Qué tal",parr1);
});

btn2.onclick = () => {
    // parr2.innerHTML = "Lalala";
    escribirDOM("lalala",parr2);
}
// Funciones
function escribirDOM(mensaje,componentDOM){
    componentDOM.innerHTML = `<h3>${mensaje}</h3>`
}
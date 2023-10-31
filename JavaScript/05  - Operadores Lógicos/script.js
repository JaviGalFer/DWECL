'use strict'

let elementoRespuesta1;
let elementoRespuesta2;
let elementoRespuesta3;
let elementoEdad;

function imprimirElto(elto, mensaje){
    elto.textContent = mensaje;
}

function cargarDOM(){
    elementoRespuesta1 = document.getElementById("respuesta1");
    elementoRespuesta2 = document.getElementById("respuesta2");
    elementoRespuesta3 = document.getElementById("respuesta3");
    elementoEdad = document.getElementById("textoEdad");
}

window.addEventListener('load',cargarDOM);

function esNumero(dato){
    if ((dato.trim().length == 0) || (Number.isNaN(+dato))){
        return false;
    }
    else {
        return true;
    }
}

function reset(){
    imprimirElto(elementoRespuesta1,"");
    imprimirElto(elementoRespuesta2,"");
    imprimirElto(elementoRespuesta3,"");
}

function calcular(){
    reset();
    if (esNumero(elementoEdad.value)){
        escribirRespuestas();
    }
    else {
        alert("no ha introducido un número válido");
    }
}

function escribirRespuestas(){

    let edad = elementoEdad.value;
    let mensaje1,mensaje2,mensaje3 = "";

    if (edad >=18){
        mensaje1 = "Puede beber";
    }
    else{
        mensaje1 = "No puede beber";
    }

    if (edad >=18 && edad <=30){
        mensaje2 = "puede ingresar a la fiesta";
    }
    else{
        mensaje2 ="no puede ingresar a la fiesta";
    }

    if (edad>=20 && edad<=25){
        mensaje3 = "tiene entrada gratis";
    }
    else{
        mensaje3 = "no tiene entrada gratis";
    }

    imprimirElto(elementoRespuesta1,mensaje1);
    imprimirElto(elementoRespuesta2,mensaje2);
    imprimirElto(elementoRespuesta3,mensaje3);


}




/*
function calcular(){
    let edad = elementoEdad.value;

    let puedeBeber = edad >= 18;
    elementoRespuesta1.textContent = puedeBeber;

    let puedeIngresar = edad >= 18 && edad <= 30;
    elementoRespuesta2.textContent = puedeIngresar;

    let entradagratis = edad == 20 || edad == 25;
    elementoRespuesta3.textContent = entradagratis;
}

*/
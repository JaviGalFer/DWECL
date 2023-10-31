'use strict'

document.addEventListener("DOMContentLoaded",() => {

    // Declaración de variables
    const op1 = document.querySelector("#op1");
    const op2 = document.querySelector("#op2");
    const btnSuma = document.querySelector("#suma");
    const btnPotencia = document.querySelector("#potencia");
    const eltoResultado = document.querySelector("#resultado");

    // Listeners - Eventos
    btnSuma.addEventListener("click",() => {
        let resultado = "";
        if (esNumero(op1.value) && esNumero(op2.value)){
            // resultado = sumar(op1.value, op2.value);
            resultado = operacion(+op1.value, +op2.value, "suma");
        }else{
            resultado = "Número/s incorrectos";
        }
        imprimirDOM(resultado,eltoResultado);
    })

    btnPotencia.addEventListener("click",() => {
        let resultado = "";
        if (esNumero(op1.value) && esNumero(op2.value)){
            // resultado = potencia(op1.value, op2.value);
            resultado = operacion(+op1.value,+op2.value, "potencia");
        }else{
            resultado = "Número/s incorrectos";
        }
        imprimirDOM(resultado,eltoResultado);
    })

    
    // Funciones
    function sumar(op1, op2){
        let res = +op1 + +op2;
        return res;
    }

    function potencia(op1, op2){
        let res = Math.pow(+op1, +op2);
        return res;
    }

    function imprimirDOM(mensaje, componenteDOM){
        componenteDOM.innerHTML = `<h3>${mensaje}</h3>`;
    }

    function esNumero(dato){
        if((dato.trim().length == 0) || (Number.isNaN(+dato))){
            return false;
        }else{
            return true;
        }
    }

    function operacion(op1,op2,tipo){
        let resultado = "";
        switch(tipo){
            case "suma":
                resultado = sumar(op1,op2);
                break;
            case "potencia":
                resultado = potencia(op1,op2);
                break;
        }
        return resultado;
    }

});
'use strict'
document.addEventListener("DOMContentLoaded",() => {
    //ZONA DE VARIABLES
    const btnMultiplicar = document.getElementById("multiplicar");
    const elementoTextoTabla = document.getElementById("textoTabla");
    const elementoTablaMultiplicar = document.getElementById("listaTabla");
    let numeroTabla = "";

    //ZONA DE EVENTOS
    btnMultiplicar.addEventListener("click", () => {
        numeroTabla = elementoTextoTabla.value;
        if (esNumero(numeroTabla)){
            numeroTabla = parseInt(numeroTabla);
            multiplicar();
        }
        else{
            elementoTablaMultiplicar.innerHTML = "<h3>número introducido incorrecto</h3>";
        }
    });

    //ZONA DE FUNCIONES
    function multiplicar(){
        resetTabla();
        
        for(let x=1; x<=10; x++){
            let numeroResultado = numeroTabla * x;

            let itemLista = document.createElement("li");
            itemLista.innerHTML = `
            <h3> ${numeroTabla} por  ${x} es igual a ${numeroResultado} </h3>
            `;
            elementoTablaMultiplicar.appendChild(itemLista);
        }
    }

    function resetTabla(){
        // elementoTablaMultiplicar.innerHTML = "";
        //Una forma más eficiente de limpiar un subarbol del DOM
        while(elementoTablaMultiplicar.firstChild) {
            elementoTablaMultiplicar.removeChild(elementoTablaMultiplicar.firstChild);
        }
    }


    function esNumero(dato){
        if ((dato.trim().length == 0) || (Number.isNaN(+dato))){
            return false;
        }
        else {
            return true;
        }
    }

});



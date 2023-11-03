//ZONA DE VARIABLES
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const resultado =  document.getElementById("resultado");

const contenedorBotones = document.querySelector("#contenedorBotones");

const btnSuma =  document.getElementById("suma");
const btnResta =  document.getElementById("resta");
const btnMultiplicacion =  document.getElementById("multiplicacion");
const btnDivision =  document.getElementById("division");
const btnRaiz =  document.getElementById("raiz");
const btnPotencia =  document.getElementById("potencia");
const btnAbsoluto =  document.getElementById("absoluto");




//FUNCIÓN MAIN
cargarEventListeners();


//ZONA DE EVENTOS
/*function cargarEventListeners(){
btnSuma.addEventListener("click",(e)=>{
    console.log(e.target.id);
    
    console.log(btnSuma.id);
    
    calcular(e.target.id);
});


btnResta.addEventListener("click",(e)=>{
    console.log(e.target.id);

    console.log(btnSuma.id);

    calcular(e.target.id);
});

}
*/

function cargarEventListeners(){
    contenedorBotones.addEventListener("click", eventoBoton);
}

function eventoBoton(e){
    console.log(e.target);
    if (e.target.classList.contains('operacion')){
        console.log(e.target.id);
        calcular(e.target.id);
    }
}



//ZONA DE FUNCIONES
function calcular(operacion){
    console.log("calcular");
    let res = 0;
    let n1 = parseInt(op1.value);
    let n2 = parseInt(op2.value);
    if (!controlErroresExito(n1,n2)){
        res = "números incorrectos";
    }
    else {
        switch(operacion){
            case "suma":
                console.log("suma");
                res = n1 + n2;
                break;
            case "resta":
                console.log("resta");
                res = n1 - n2;
                break;
            case "multiplicacion":
                console.log("multiplicar");
                res = n1 * n2;
                break;
            case "division":
                console.log("division");
                res = n1 / n2;
                break;
            case "raiz":
                console.log("raiz");
                res = Math.sqrt(n2);
                break;
            case "potencia":
                console.log("potencia");
                res = Math.pow(n1,n2);
                break;
            case "absoluto":
                console.log("absoluto");
                res = Math.abs(n2);
                break;
        }
    }
    mostrarResultado(res);
}

function controlErroresExito(n1,n2){
    if (n1 <0 || n2 <0 || isNaN(n1) || isNaN(n2)){
        return false;
    }
    else {
        return true;
    }
}

function mostrarResultado(mensaje) {
    console.log("mostrar resultado: " + mensaje);
    resultado.value = mensaje;
}

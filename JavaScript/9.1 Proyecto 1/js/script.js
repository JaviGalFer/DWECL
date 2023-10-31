// Variables

const tiempoInput = document.getElementById("tiempo");
const estadoTexto = document.getElementById("estado");
const activarBoton = document.getElementById("encender");
const desactivarBoton = document.getElementById("apagar");

// Eventos
activarBoton.addEventListener("click", () => {
    activarAlarma();
})

desactivarBoton.addEventListener("click", () => {
    desactivarAlarma();
})

// Funciones
function activarAlarma(){
    setTimeout(()=>{
    estadoTexto.textContent="Encendida";
    estadoTexto.style.color="green";

    },tiempoInput.value *1000);
}

function desactivarAlarma(){    
    estadoTexto.textContent="Apagado";
    estadoTexto.style.color="red";
}


// function saludar(){
//     // alert ("Hola mundo!")
//     let nombreUsuario = document.getElementById("nombreUsuario").value;
//     // let nombreUsuario = document.querySelector("#nombreUsuario").value;
//     let salida = document.getElementById("salida");

//     if(isEmpty(nombreUsuario)){
//         alert("Debes introducir un nombre.");
//     }else{
//         saludando(nombreUsuario,salida);
//     }
// }
// function isEmpty(user){
//     if (user == ""){
//         return true;
//     }else{
//         return false;
//     }
// }

// function saludando(user, sal){
//     let mensaje = `Hola ${user}`;
//     alert(mensaje);
//     // sal.innerHTML = mensaje;
//     salida.textContent = mensaje;
// }
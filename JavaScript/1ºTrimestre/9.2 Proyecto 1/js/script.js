// Variables

const tiempoInput = document.getElementById("tiempo");
const estadoTexto = document.getElementById("estado");
const activarBoton = document.getElementById("encender");
const desactivarBoton = document.getElementById("apagar");
const alarmaAudio = document.getElementById("audioAlarma");

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
    alarmaAudio.play();
    },tiempoInput.value *1000);
}

function desactivarAlarma(){    
    estadoTexto.textContent="Apagado";
    estadoTexto.style.color="red";
    tiempoInput.value = "";
}

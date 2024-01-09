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

function actualizarhora(){
    const horaActualElto = document.getElementById("hora");
    const horaActual = new Date();
    const hora = horaActual.getHours().toString().padStart(2, "0");
    const minutos = horaActual.getMinutes().toString().padStart(2, "0");
    const segundos = horaActual.getSeconds().toString().padStart(2, "0");
    const horaActualConcat = `${hora}:${minutos}:${segundos}`;
    horaActualElto.textContent = `Hora actual: ${horaActualConcat}`;
}

actualizarhora();

setInterval(actualizarhora, 1000);
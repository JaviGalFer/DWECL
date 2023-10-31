function mostrarAlerta(mensaje){
    alert(mensaje);
}

function comprobarEdad(){
    const edadInput = document.getElementById("numero");
    const respuesta1 = document.getElementById("respuesta1");
    const respuesta2 = document.getElementById("respuesta2");
    const respuesta3 = document.getElementById("respuesta3");

    const edad = parseInt(edadInput.value);

    if (isNaN(edad) || edad < 0){
        mostrarAlerta("Ingrese una edad válidad (mayor o igual a 0).");
        edadInput.value = ""; //Limpiamos campo
        respuesta1.textContent = "---";
        respuesta2.textContent = "---";
        respuesta3.textContent = "---";
        return;
    }

    if (edad >= 18){
        respuesta1.textContent = "Sí, puede beber alcohol.";
    }else{
        respuesta1.textContent = "No puede beber alcohol.";
    }

    if (edad >= 18 && edad <= 30){
        respuesta2.textContent = "Sí, puede ingresar a la fiesta.";
    }else{
        respuesta2.textContent = "No puede ingresar a la fiesta.";
    }

    if (edad >= 20 && edad <= 25){
        respuesta3.textContent = "Sí, tiene entrada gratis.";
    }else {
        respuesta3.textContent = "No tiene entrada gratis.";
    }
}

const edadInput = document.getElementById("numero");
edadInput.addEventListener("change", comprobarEdad);

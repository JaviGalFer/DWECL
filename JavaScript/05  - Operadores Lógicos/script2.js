function comprobarEdad() {
    // Obtener el valor del campo de entrada
    var edad = document.getElementById("numero").value;

    // Verificar si el campo está vacío o no es un número
    if (edad === "" || isNaN(edad)) {
        alert("Por favor, ingrese una edad válida.");
        return;
    }

    // Convertir la entrada a un número entero
    edad = parseInt(edad);

    // Comprobar si la edad es negativa
    if (edad < 0) {
        alert("La edad no puede ser negativa.");
        return;
    }

    // Comprobar las condiciones y mostrar las respuestas
    var respuesta1 = document.getElementById("respuesta1");
    var respuesta2 = document.getElementById("respuesta2");
    var respuesta3 = document.getElementById("respuesta3");

    respuesta1.textContent = edad >= 18 ? "Sí, puede beber alcohol." : "No, no puede beber alcohol.";
    respuesta2.textContent = edad >= 18 && edad <= 30 ? "Sí, puede ingresar a la fiesta." : "No, no puede ingresar a la fiesta.";
    respuesta3.textContent = edad >= 20 && edad <= 25 ? "Sí, tiene entrada gratis." : "No, no tiene entrada gratis.";
}

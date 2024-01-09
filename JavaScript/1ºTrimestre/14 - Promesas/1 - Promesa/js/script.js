/*
@author: Fco Javier Gallego Fernández
*/

function obtenerDesdeTXT() {
    // Mostrar datos desde el archivo TXT
    fetch('datos/datos.txt')
        .then(response => response.text())
        .then(data => mostrarResultado(data))
        .catch(error => console.error('Error al obtener datos desde TXT:', error));
}

function cargarJSONObjeto() {
    // Mostrar datos desde el archivo JSON objeto
    fetch('datos/empleado.json')
        .then(response => response.json())
        .then(data => mostrarResultado(JSON.stringify(data)))
        .catch(error => console.error('Error al cargar JSON - Objeto:', error));
}

function cargarJSONArray() {
    // Mostrar datos desde el archivo JSON array
    fetch('datos/empleados.json')
        .then(response => response.json())
        .then(data => mostrarResultado(JSON.stringify(data)))
        .catch(error => console.error('Error al cargar JSON - Array:', error));
}

function cargarAPI() {
    // Mostrar datos desde una API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => mostrarResultado(JSON.stringify(data)))
        .catch(error => console.error('Error al cargar API:', error));
}

function mostrarResultado(resultado) {
    // Mostrar el resultado 
    document.getElementById('resultado').innerHTML = resultado;
}

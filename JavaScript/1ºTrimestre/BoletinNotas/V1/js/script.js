// Zona de carga/lectura del DOM
document.addEventListener('DOMContentLoaded', function () {
    // Zona de carga de los eventos
    // const calcularPromedioBtn = document.querySelector('#resultados-container button:nth-child(1)');
    // const calcularNotaMasAltaBtn = document.querySelector('#resultados-container button:nth-child(3)');
    // const haySuspensosBtn = document.querySelector('#resultados-container button:nth-child(5)');

    const calcularPromedioBtn = document.querySelector('#acciones-container button:nth-of-type(1)');
    const calcularNotaMasAltaBtn = document.querySelector('#acciones-container button:nth-of-type(2)');
    const haySuspensosBtn = document.querySelector('#acciones-container button:nth-of-type(3)');


    // Array de notas aleatorias
    const notas = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);

    // Zona de pintura dinámica del array
    const notasLista = document.querySelector('#notas-lista');
    notas.forEach(nota => {
        const li = document.createElement('li');
        li.textContent = nota;
        notasLista.appendChild(li);
    });

    // Zona de funciones
    function calcularPromedio() {
        const suma = notas.reduce((acc, nota) => acc + nota, 0);
        const promedio = suma / notas.length || 0; // Evitar dividir por cero
        document.querySelector('#promedio').textContent = `Promedio: ${promedio.toFixed(2)}`;
    }

    function calcularNotaMasAlta() {
        const notaMasAlta = Math.max(...notas);
        document.querySelector('#nota-mas-alta').textContent = `Nota más alta: ${notaMasAlta}`;
    }

    function haySuspensos() {
        const haySuspensos = notas.some(nota => nota < 5);
        document.querySelector('#hay-suspensos').textContent = `Hay suspensos: ${haySuspensos ? 'Sí' : 'No'}`;
    }

    // Zona de escritura del DOM
    calcularPromedioBtn.addEventListener('click', calcularPromedio);
    calcularNotaMasAltaBtn.addEventListener('click', calcularNotaMasAlta);
    haySuspensosBtn.addEventListener('click', haySuspensos);
});

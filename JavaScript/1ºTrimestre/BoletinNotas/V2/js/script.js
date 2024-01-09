// script.js

document.addEventListener('DOMContentLoaded', function () {
    const cargarNotasBtn = document.getElementById('cargar-notas');
    const borrarNotasBtn = document.getElementById('borrar-notas');
    const notasLista = document.getElementById('notas-lista');
    const notasH = document.getElementById('hnotas');
    const nombreH = document.getElementById('hnombre');
    const accionBtns = document.querySelectorAll('.accion-btn');

    let notas = [];

    cargarNotasBtn.addEventListener('click', function () {
        notas = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);

        // Pintar las notas
        notasLista.innerHTML = '';
        notasH.innerHTML = 'Notas: ';
        nombreH.innerHTML = 'Nombre: Francisco Javier Gallego Fernández';
        notas.forEach(nota => {
            const li = document.createElement('li');
            li.textContent = nota;
            notasLista.appendChild(li);
        });

        // Habilitar/deshabilitar botones
        cargarNotasBtn.disabled = true;
        borrarNotasBtn.disabled = false;
        accionBtns.forEach(btn => (btn.disabled = false));
    });

    borrarNotasBtn.addEventListener('click', function () {
        notas = [];

        // Limpiar la lista de notas
        notasLista.innerHTML = '';
        notasH.innerHTML = '';
        nombreH.innerHTML = '';
        document.getElementById('promedio').textContent = ``;
        document.getElementById('nota-mas-alta').textContent = ``;
        document.getElementById('hay-suspensos').textContent = ``;
        
        // Habilitar/deshabilitar botones
        cargarNotasBtn.disabled = false;
        borrarNotasBtn.disabled = true;
        accionBtns.forEach(btn => (btn.disabled = true));
    });

    document.getElementById('acciones-container').addEventListener('click', function (event) {
        const target = event.target;

        // Delegar eventos a los botones de acciones
        if (target.classList.contains('accion-btn')) {
            switch (target.textContent) {
                case 'Calcular Promedio':
                    calcularPromedio();
                    break;
                case 'Calcular Nota más alta':
                    calcularNotaMasAlta();
                    break;
                case 'Hay algún suspenso':
                    haySuspensos();
                    break;
            }
        }
    });

    function calcularPromedio() {
        const suma = notas.reduce((acc, nota) => acc + nota, 0);
        const promedio = suma / notas.length || 0;
        document.getElementById('promedio').textContent = `Promedio: ${promedio.toFixed(2)}`;
    }

    function calcularNotaMasAlta() {
        const notaMasAlta = Math.max(...notas);
        document.getElementById('nota-mas-alta').textContent = `Nota más alta: ${notaMasAlta}`;
    }

    function haySuspensos() {
        const haySuspensos = notas.some(nota => nota < 5);
        document.getElementById('hay-suspensos').textContent = `Hay suspensos: ${haySuspensos ? 'Sí' : 'No'}`;
    }
});

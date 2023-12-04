//Variables

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];


//Main

function cargarEventListeners() {
    //Cuando se agrega un curso
    listaCursos.addEventListener('click', agregarCurso);
    //Eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);
    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    //Cargar carrito desde LS
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
    // Cargar cursos desde el JSON
    document.addEventListener('DOMContentLoaded', cargarCursosDesdeJSON);
}

//Funciones
function leerCarritoLS(){
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(articulosCarrito);
    carritoHTML();
}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }

}


function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}

function cargarCursosDesdeJSON() {
    fetch('./data/cards.json') // Ruta al archivo JSON
        .then(response => response.json())
        .then(data => {
            // Procesar la información del JSON
            console.log('Datos cargados desde JSON:', data);
            mostrarCursosHTML(data);
        })
        .catch(error => console.error('Error al cargar los cursos desde el JSON:', error));
}

function mostrarCursos(cursos) {
    // Limpiar contenido actual de la lista de cursos
    listaCursos.innerHTML = '';

    // Iterar sobre cada curso y agregarlo al HTML
    cursos.forEach(curso => {
        const { src, titulo, author, precioAlto, precioBajo, id } = curso;

        // Crear elemento de curso
        const cursoHTML = document.createElement('div');
        cursoHTML.classList.add('curso');

        cursoHTML.innerHTML = `
            <img src="${src}" alt="${titulo}">
            <div class="info-curso">
                <h4>${titulo}</h4>
                <p>Autor: ${author}</p>
                <p>Precio: ${precioBajo} - ${precioAlto}</p>
                <a href="#" class="agregar-carrito" data-id="${id}">Agregar al carrito</a>
            </div>
        `;

        // Agregar el curso al contenedor de la lista de cursos
        listaCursos.appendChild(cursoHTML);
    });
}

// Llamar a la función principal para cargar los event listeners
cargarEventListeners();
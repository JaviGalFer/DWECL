import * as biblioteca from './biblioteca.js';

document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    const listaCarrito = document.getElementById('lista-carrito').getElementsByTagName('tbody')[0];

    // Función para vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', function () {
        biblioteca.vaciarCarrito();
    });

    // Evento para borrar curso del carrito
    listaCarrito.addEventListener('click', function (event) {
        if (event.target.classList.contains('borrar-curso')) {
            const cursoId = event.target.getAttribute('data-id');
            biblioteca.borrarCursoDelCarrito(cursoId);
        }
    });

    // Cargar las cards desde el archivo JSON al cargar la página
    biblioteca.cargarCardsDesdeJSON();

    // Cargar el carrito desde el Local Storage al cargar la página
    biblioteca.cargarCarritoDesdeLocalStorage();
});

document.addEventListener('click', function (event) {
    // Desenfocar cualquier elemento que esté enfocado
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
});

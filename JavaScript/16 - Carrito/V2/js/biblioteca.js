let carrito = []; // Declara carrito como variable global

// HITO 1: CARGO EL DOM
// Función para cargar el carrito desde el Local Storage
export function cargarCarritoDesdeLocalStorage() {
    try {
        const storedCarrito = localStorage.getItem('carrito');
        carrito = Array.isArray(storedCarrito) ? JSON.parse(storedCarrito) : [];
        renderizarCarrito();
    } catch (error) {
        console.error('Error al cargar el carrito desde el Local Storage:', error);
    }
}


// HITO 3: AGREGAR CURSO SELECCIONADO AL CARRITO
// Función para agregar un curso al carrito
export function agregarCursoAlCarrito(id, nombre, precio) {
    const cursoExistente = carrito.find(curso => curso.id === id);

    if (cursoExistente) {
        // Incrementar la cantidad si el curso ya está en el carrito
        cursoExistente.cantidad++;
    } else {
        // Agregar nuevo curso al carrito si no existe
        const imagenCurso = document.querySelector(`.agregar-carrito[data-id="${id}"]`).closest('.card').querySelector('.imagen-curso');
        const imagen = imagenCurso ? imagenCurso.src : ''; // Obtener la URL de la imagen
        carrito.push({ id, nombre, precio, cantidad: 1, imagen });
    }

    renderizarCarrito();
    actualizarLocalStorage();
}

// HITO 4: ELIMINAR CURSO DEL CARRITO
// Función para borrar un curso del carrito
export function borrarCursoDelCarrito(id) {
    carrito = carrito.filter(curso => curso.id !== id);
    renderizarCarrito();
    actualizarLocalStorage();
}

// Función para renderizar el carrito en la interfaz de usuario
export function renderizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito').getElementsByTagName('tbody')[0];
    listaCarrito.innerHTML = '';

    carrito.forEach(curso => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="${curso.imagen}" width="50"></td>
            <td>${curso.nombre}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
        `;
        listaCarrito.appendChild(fila);
    });
}

// HITO 5: VACIAR CARRITO
// Función para vaciar el carrito
export function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    actualizarLocalStorage();
}


// HITO 7: LOCAL STORAGE
// Función para guardar el carrito en el Local Storage
export function actualizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// HITO 9: JSON - CARDS DINÁMICAS
// Función para cargar las cards desde el archivo JSON
export async function cargarCardsDesdeJSON() {
    try {
        const response = await fetch('data/cards.json');
        const cards = await response.json();

        // Renderizar las cards en el DOM
        const listaCursos = document.getElementById('lista-cursos');
        listaCursos.innerHTML = '';

        let currentRow;
        cards.forEach((card, index) => {
            if (index % 3 === 0) {
                currentRow = document.createElement('div');
                currentRow.classList.add('row');
                listaCursos.appendChild(currentRow);
            }
            const cardHTML = `
                <div class="four columns">
                    <div class="card">
                        <img src="${card.src}" class="imagen-curso u-full-width" />
                        <div class="info-card">
                            <h4>${card.titulo}</h4>
                            <p>${card.author}</p>
                            <img src="img/estrellas.png" />
                            <p class="precio">${card.precioAlto} <span class="u-pull-right">${card.precioBajo}</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${card.id}">Agregar Al Carrito</a>
                        </div>
                    </div>
                </div>
            `;
            const cardElement = document.createElement('div');
            cardElement.innerHTML = cardHTML.trim();
            currentRow.appendChild(cardElement.firstChild);
        });

        // Evento para agregar curso al carrito (debe ejecutarse después de renderizar las cards)
        const agregarCarritoBtns = document.querySelectorAll('.agregar-carrito');
        agregarCarritoBtns.forEach(btn => {
            btn.addEventListener('click', function (event) {
                event.preventDefault();
                const curso = event.target.parentElement;
                const id = curso.querySelector('.agregar-carrito').getAttribute('data-id');
                const nombre = curso.querySelector('h4').textContent;
                const precio = curso.querySelector('.precio').textContent;

                agregarCursoAlCarrito(id, nombre, precio);
            });
        });
    } catch (error) {
        console.error('Error al cargar las cards:', error);
    }
}
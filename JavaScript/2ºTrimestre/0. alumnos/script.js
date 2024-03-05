'use strict';

///////////////////////////////////////
////////////////////////CARGA DOM///////////////////////

// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');

//SCROLL SMOOTH
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//MENU FADE ANIMATION
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__link');
const navLink = document.querySelectorAll('.nav__link');
const navLogo = document.querySelector('.nav__logo');

//TABBED COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');





///////////////////FUNCIONES//////////////////

////////////MODAL WINDOW//////////////
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e){

    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})

////////////SCROLL SMOOTH//////////////
btnScrollTo.addEventListener('click', function (e) {
    // const btnCoords = e.target.getBoundingClientRect();
    // console.log(btnCoords);
    // const X = window.scrollX;
    // const Y = window.scrollY;
    // console.log('X: ' + X);
    // console.log('Y: ' + Y);

    console.log(
        'height / width viewport: ',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    
    );

    //OPCIÓN 1

    //const section1Coords = section1.getBoundingClientRect();
    // //actual posición + actual scroll
    // window.scrollTo(
    //     section1Coords.left + window.scrollX,
    //     section1Coords.top + window.scrollY
    // );

    //OPCIÓN 2

    // window.scrollTo(section1Coords);
    // window.scrollTo({
    //     left: section1Coords.left,
    //     top: section1Coords.top,
    //     behavior: 'smooth',
    // });

    // OPCIÓN 3
    section1.scrollIntoView({ behavior: "smooth" });
});

console.log(
    'height / width viewport: ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth

);



///////////PAGE NAVIGATION ////////////
/*/
document.querySelectorAll('.nav__link').forEach(function (e) {
    e.addEventListener('click', function (e) {
        //console.log('LINK');
        e.preventDefault();
        const id = getAttribute('href');
        //No uso this.href porque no quiero direcciones absolutas, sino relativas
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
});
*/


//SLIDER COMPONENT
const sliderContainer = document.querySelector(".slider");
const slideEltos = document.querySelectorAll(".slide");
// slideEltos[0] = style.transform = 'translate(0%)';
// slideEltos[1] = style.transform = 'translate(100%)';
// slideEltos[2] = style.transform = 'translate(200%)';
sliderContainer.style.overflow = 'visible';
let num_desplazamientos = 0;
let max_desplazamientos = slideEltos.length - 1;

const init = function () {
    gotoSlide();
    pintarDot();
}

init();

const buttonNext = document.querySelector('.slider__btn--right');
const buttonPrevius = document.querySelector('.slider__btn--left');
buttonPrevius.addEventListener('click', handlePreviusSlider);

buttonNext.addEventListener('click', handleNextSlider);


function activateDot(posSlide){
    const dotActivado = document.querySelector(
        '.dots__dot[data-slide="${posSlide}"]'
    );
    document.querySelectorAll('.dots__dot').forEach();
}

slideEltos.forEach(
    (item, pos) => (item.style.transform = `translate(${pos * 100}%)`)
)


function handleNextSlider() {
    if (num_desplazamientos === max_desplazamientos){
        num_desplazamientos = 0;
    }else {
        num_desplazamientos++;
    }
    num_desplazamientos++;
    slideEltos.forEach(
        (item, pos) => 
            (item.style.transform = `translate(${
                (pos - num_desplazamientos) * 100
            }%)`)
    );
}

function gotoSlide(numero_desplazamientos){
    slideEltos.forEach(
        (item,pos) => (item.style.transform = `translate(${
            (pos - numero_desplazamientos) * 100
        }%)`)
    );
    activateDot(num_desplazamientos);
}



function handlePreviusSlider() {
    if (num_desplazamientos === 0){
        num_desplazamientos = max_desplazamientos;
    }else{
        num_desplazamientos--;
    }
    gotoSlide(num_desplazamientos);
}

document.addEventListener('keydown', handleKeySlider);

function handleKeySlider(e){
    if (e.key === 'ArrowLeft'){
        handlePreviusSlider();
    }else if (e.key === 'ArrowRight'){
        handleNextSlider();
    }
}

const dotContainer = document.querySelector('.dots');

function pintarDot(){
    slideEltos.forEach(
        (item,pos) => 
        {dotContainer.insertAdjacentHTML(`beforeend`, `<button class="dots__dot" data-slide=${pos}></button>`)
    });
}

pintarDot();

//////////PAGE NAVIGATION CON DELEGACION////////////
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
    }
}) ;


///////////TABBED COMPONENT///////////////
tabsContainer.addEventListener('click', function (e){
    const clicked = e.target.closest('.operations__tab');
    //guard clause
    if (!clicked) return;

    //Borrando clases activas
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__contentn--active'));

    //Añadiendo clases activas
    clicked.classList.add('operations__tab--active');

    const contenido = document.querySelector(
        '.operations__content--${clicked.dataset.tab}'
    );
    contenido.classList.add('operations__content--active');

});


////////////MENU FADE ANIMATION////////
const handleOver = function (e, opacity){
    if (e.target.classList.contains('nav__link')) {
        //console.log(Array.from(navLinks.children));
        const enlace_actual = e.target;

        navLink.forEach(link =>{
            if (link !== enlace_actual) {
                // link.style.opacity = 0.5;
                link.style.opacity = this;
            }
        });
        // navLogo.style.opacity = 0.5;
        navLogo.style.opacity = this;
    }
};

/*
navMenu.addEventListener('mouseover', e => {
    handleOver(e, 0.5);
});

navMenu.addEventListener('mouseout', function (e){
    handleOver(e, 1);
});
*/

navMenu.addEventListener('mouseover', handleOver.bind(0.5));
navMenu.addEventListener('mouseout', handleOver.bind(1));
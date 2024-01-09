'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');

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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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


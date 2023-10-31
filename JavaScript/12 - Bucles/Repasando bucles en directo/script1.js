const array_frutas = [
    {id: 1, fruta: "manzana", precio: 8.45},
    {id: 2, fruta: "Naranja", precio: 6.32},
    {id: 3, fruta: "Banana", precio: 2.36},
    {id: 4, fruta: "Pera", precio: 1.58},
    {id: 5, fruta: "Sandía", precio: 7.21}
];


imprimir_forEach_movida1(array_frutas);
imprimir_forEach_movida2(array_frutas);
imprimir_forEach_programacionFuncional(array_frutas);
imprimir_forin(array_frutas);

function imprimir_forEach_movida1(un_array){
    un_array.forEach((elto,pos,array) => {
        console.log(elto.fruta + " posición: " + pos + "array: " + array.length);
    })
}

function imprimir_forEach_movida2(un_array){
    un_array.forEach(elto => console.log(elto.fruta));
}

function imprimir_forEach_movida3(un_array){
    un_array.forEach(function (elto,pos,array){
        console.log(elto.fruta + " posición: " + pos + "array: " + array.length);
    })
}



function imprimir_forEach_programacionFuncional(un_array){
    un_array.forEach(imprimir_forEach); 
}

function imprimir_forEach(elto){
    console.log(elto.fruta);
}


function imprimir_forin(un_array){
    for (pos in un_array){
        console.log(un_array[pos].fruta);
    }
}

// Entrada - Salida de datos

alert("Hola mundo");

let entradaDatos = prompt("¿Quién eres?");
console.log("Te llamas: " + entradaDatos);
console.log(`Te llamas : ${entradaDatos}`);

// Variables  - usar let siempre

let saludar = "Hola";
const numeroPi = 3.14;
console.log (numeroPi);

let variable_boolean_true = true;
let variable_boolean_false = false;

// Concatenación e interpolación de cadenas

let docente = "Rocio Lopez";
let curso = "DAW";
let docente_curso = docente + " profesora de " + curso;
console.log(docente_curso);

let docente_curso2 = `${docente} profesora de ${curso} `;
console.log(docente_curso2);

// Seleccionando elementos del DOM

let cursoDAW = document.querySelector("#cursoDAW");
cursoDAW.innerHTML = `
<h2>Profesora: ${docente}</h2>
<h3>Curso: ${curso}</h3>
`;

// if else

let cursoDAM = document.querySelector("#cursoDAM");
let existe_cursoDAM = true;

if (existe_cursoDAM){
    cursoDAM.innerHTML = "<h1>Existe curso DAM</h1>";
}else{
    cursoDAM.innerHTML = "<h1>No existe curso DAM</h1>";
}

// Acumulación valores +=

let informacionCentro = document.querySelector("#informacionCentro");
informacionCentro.innerHTML = "<h2>Informacion del centro</h2>";

informacionCentro.innerHTML += `
    <h3>Entre los profesores del centro, uno de ellos es: ${docente} </h3>
    <h3> Y entre los cursos que imparte, uno de ellos es: ${curso} </h3>
`;

let saludo = "<h3>Hola mundo</h3>";

imprimirHTML(informacionCentro,saludo);
imprimirHTML();

// Funciones

// Esta función es muy abstracta
function imprimirHTML(contenedor, mensaje){
    contenedor.innerHTML = mensaje;
}

// Esta función es muy concreta
function imprimirHTML(){
    informacionCentro.innerHTML += `
        <h3>Imprimir concreto </h3>
        <h3> Cocreto V2</h3>
    `;
}
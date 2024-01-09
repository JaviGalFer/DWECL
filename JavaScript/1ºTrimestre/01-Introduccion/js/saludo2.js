function saludo2(){
    let mivariable = prompt("Cuál es tu nombre?");
    //alert("hola: " + mivariable);
    //alert(`hola ${mivariable}`);
    document.querySelector('.contenido').innerHTML = `Buenos días ${mivariable}`;

}
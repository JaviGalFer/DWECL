//Repasar

//Primer nivel
setTimeout(saludar(), 1000);

function saludar(){
    alert("Hola mundo");
}

//Segundo nivel

setTimeout(function(){
    alert("Función anónima")
}, 3000);

//Arrow functions
setTimeout(() =>{
    alert("Función arrow")
}, 5000);


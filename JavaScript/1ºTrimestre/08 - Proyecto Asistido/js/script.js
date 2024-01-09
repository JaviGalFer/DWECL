function saludar(){
    // alert ("Hola mundo!")
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    // let nombreUsuario = document.querySelector("#nombreUsuario").value;
    let salida = document.getElementById("salida");

    if(isEmpty(nombreUsuario)){
        alert("Debes introducir un nombre.");
    }else{
        saludando(nombreUsuario,salida);
    }
}
function isEmpty(user){
    if (user == ""){
        return true;
    }else{
        return false;
    }
}

function saludando(user, sal){
    let mensaje = `Hola ${user}`;
    alert(mensaje);
    // sal.innerHTML = mensaje;
    salida.textContent = mensaje;
}
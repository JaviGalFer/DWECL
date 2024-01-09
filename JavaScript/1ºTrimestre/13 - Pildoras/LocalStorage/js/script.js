const contenido = document.querySelector(".contenido");


localStorage.removeItem("nombre");
//localStorage.clear();
escribirLS();
getLS();

function escribirLS(){
    //string
    const nombreProfesor = "Javi";
    localStorage.setItem("nombre",nombreProfesor);

    //array
    const meses = ["enero", "febrero", "marzo"];
    localStorage.setItem("meses",JSON.stringify(meses));

    //objeto
    const alumno = {
        nombre: "Pedro",
        ciclo: "DAW"
    }
    localStorage.setItem("objetoAlumno", JSON.stringify(alumno));
}

function getLS(){
    const nombreProfesor = localStorage.getItem("nombre");
    const meses = JSON.parse(localStorage.getItem("meses"));
    const alumno = JSON.parse(localStorage.getItem("objetoAlumno"));
    const texto = document.createElement("p");
    texto.innerHTML = `
            nombreProfesor: ${nombreProfesor}
            meses: ${meses.join("|")}
            alumno: ${alumno.nombre} ${alumno.ciclo}
    `;
    contenido.appendChild(texto);
}
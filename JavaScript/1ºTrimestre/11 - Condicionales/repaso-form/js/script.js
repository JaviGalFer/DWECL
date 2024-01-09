document.addEventListener("DOMContentLoaded", function() {
    const puestoTrabajoInput = document.getElementById("puestoTrabajo");
    const salarioResultado = document.getElementById("salarioResultado");
    const noInfoMessage = document.getElementById("noInfoMessage");
    const btnSalario = document.getElementById("btnSalario");
    const resultContainer = document.getElementById("resultContainer");

    btnSalario.addEventListener("click", () => {
        consultarSalario();
    });

    const baseDatosSalarios = [
        { puesto: 'project manager', salario: 80000, detalle: 'Gerente de Proyecto' },
        { puesto: 'data analyst', salario: 60000, detalle: 'Analista de Datos' },
        { puesto: 'software engineer', salario: 65000, detalle: 'Ingeniero de Software' }
    ];

    function consultarSalario() {
        const puestoTrabajo = puestoTrabajoInput.value;
        let salarioInfo = "";
        let displayStyle = "block";

        const salarioEncontrado = baseDatosSalarios.find(item => item.puesto === puestoTrabajo);

        if (salarioEncontrado) {
            salarioInfo = `Puesto: ${salarioEncontrado.detalle}, Salario aproximado: ${salarioEncontrado.salario} euros`;
            salarioResultado.style.display = "block";
            noInfoMessage.style.display = "none";
        } else {
            salarioInfo = "";
            displayStyle = "none";
            salarioResultado.style.display = "none";
            noInfoMessage.style.display = "block";
        }

        resultContainer.style.display = displayStyle;
        salarioResultado.textContent = salarioInfo;
    }
});
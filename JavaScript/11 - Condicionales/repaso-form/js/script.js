document.addEventListener("DOMContentLoaded", function() {
    const puestoTrabajoInput = document.getElementById("puestoTrabajo");
    const salarioResultado = document.getElementById("salarioResultado");
    const btnSalario = document.getElementById("btnSalario");

    btnSalario.addEventListener("click", () => {
        consultarSalario();
    });

    const baseDatosSalarios = [
        { puesto: 'dba job', salario: 70000, detalle: 'Administrador de bases de datos' },
        { puesto: 'front-end developer', salario: 45000, detalle: 'Desarrollador de Front-end' },
        { puesto: 'back-end developer', salario: 50000, detalle: 'Desarrollador de Back-end' }
    ];

    function consultarSalario() {
        const puestoTrabajo = puestoTrabajoInput.value;
        let salarioInfo = "Puesto no encontrado";

        const salarioEncontrado = baseDatosSalarios.find(item => item.puesto === puestoTrabajo);

        if (salarioEncontrado) {
            salarioInfo = `Puesto: ${salarioEncontrado.detalle}, Salario aproximado: ${salarioEncontrado.salario} euros`;
        }

        salarioResultado.textContent = salarioInfo;
    }
});
    
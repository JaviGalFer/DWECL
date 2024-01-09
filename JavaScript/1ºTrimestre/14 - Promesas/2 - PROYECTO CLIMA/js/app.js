async function obtenerClima() {
    const ciudad = document.getElementById('ciudad').value;
    const pais = document.getElementById('pais').value;

    // Verificar que se haya ingresado una ciudad y país
    if (ciudad === '' || pais === '') {
        alert('Por favor, ingrese ciudad y país.');
        return;
    }

    // Hacer la solicitud a la API de OpenWeatherMap
    const apiKey = 'be734975212a9737bd62ec27fc307b7d'; // Reemplaza con tu clave de API de OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);

        // Verificar si la ciudad fue encontrada
        if (!response.ok) {
            throw new Error('Ciudad no encontrada.');
        }

        const data = await response.json();

        // Mostrar el resultado en el HTML
        const temperaturaActual = (data.main.temp - 273.15).toFixed(2);
        const temperaturaMaxima = (data.main.temp_max - 273.15).toFixed(2);
        const temperaturaMinima = (data.main.temp_min - 273.15).toFixed(2);

        const resultadoHTML = `
            <p class="current-city">Temperatura en ${ciudad}</p>
            <p class="current-temp">${temperaturaActual}°C</p>
            <p class="text-center text-white mt-2">Temperatura máxima: ${temperaturaMaxima}°C</p>
            <p class="text-center text-white mt-2">Temperatura mínima: ${temperaturaMinima}°C</p>
        `;

        document.getElementById('resultado').innerHTML = resultadoHTML;
    } catch (error) {
        console.error('Error al obtener el clima:', error);
        document.getElementById('resultado').innerHTML = `<p class="text-center text-red-500 mt-6">${error.message}</p>`;
         // Limpiar el mensaje de error después de 3 segundos (3000 milisegundos)
        setTimeout(() => {
            document.getElementById('resultado').innerHTML = '';
        }, 3000);
    }
}

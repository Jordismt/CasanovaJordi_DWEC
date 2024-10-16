function displayDigitalClock() {
    // Obtener el div con id "content"
    const contentDiv = document.getElementById('content');
    
    // Función que actualiza el reloj cada segundo
    function updateClock() {
        // Obtener la hora actual
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        // Formatear la hora en formato HH:MM:SS
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        // Actualizar el contenido del div con la hora
        contentDiv.innerHTML = `<h2>Hora actual : ${timeString}</h2>`;
    }

    // Llamar a updateClock para que se ejecute cada segundo
    setInterval(updateClock, 1000);
}

// Ejecutar la función al cargar la página
window.onload = displayDigitalClock;

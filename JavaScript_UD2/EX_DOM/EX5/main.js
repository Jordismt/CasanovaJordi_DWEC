function displayCountriesTable() {
    // Obtener el div con id "content"
    const contentDiv = document.getElementById('content');
    
    // Arrays que contienen los nombres de los países y sus capitales
    const countries = ['España', 'Francia', 'Italia', 'Alemania', 'Portugal'];
    const capitals = ['Madrid', 'Paris', 'Roma', 'Berlin', 'Lisboa'];
    
    // Iniciar el HTML de la tabla
    let tableHTML = '<table border="1" style="width:100%; text-align: left;">';
    tableHTML += '<tr><th>Country</th><th>Capital</th></tr>';
    
    // Rellenar las filas de la tabla con los países y capitales
    for (let i = 0; i < countries.length; i++) {
        tableHTML += `<tr><td>${countries[i]}</td><td>${capitals[i]}</td></tr>`;
    }
    
    // Cerrar la tabla
    tableHTML += '</table>';
    
    // Insertar la tabla en el contenido del div usando innerHTML
    contentDiv.innerHTML = tableHTML;
}

// Ejecutar la función al cargar la página
window.onload = displayCountriesTable;

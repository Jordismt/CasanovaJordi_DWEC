// Array de banderas y sus capitales
const countries = [
    { name: 'Espanya', capital: 'Madrid', flag: 'https://media.istockphoto.com/id/479224872/es/foto/encuadre-completo-bandera-de-espa%C3%B1a-bandera.jpg?s=612x612&w=0&k=20&c=taKws5tGE1Z93Br0XHQO9yDK1vnpzA0My8RH9rOUzr0=' },
    { name: 'França', capital: 'París', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' },
    { name: 'Itàlia', capital: 'Roma', flag: 'https://img.freepik.com/fotos-premium/bandera-italiana_469558-2021.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1729036800&semt=ais_hybrid' },
    { name: 'Alemanya', capital: 'Berlín', flag: 'https://img.freepik.com/vector-gratis/ilustracion-bandera-alemana_53876-27101.jpg' },
    { name: 'Portugal', capital: 'Lisboa', flag: 'https://media.gettyimages.com/id/1129857437/es/foto/portugal.jpg?s=612x612&w=gi&k=20&c=T1pNme-lcXXEWql8gZaB4S6u_6ylbhRsQIrG7qYdXEY=' }
];

// Función para generar la tabla según el nivel
function generateTable(level) {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Esborrar contingut anterior
    const table = document.createElement('table');

    for (let i = 0; i < level; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < level; j++) {
            const cell = document.createElement('td');

            // Crear una bandereta aleatoria
            const randomCountry = countries[Math.floor(Math.random() * countries.length)];
            const img = document.createElement('img');
            img.src = randomCountry.flag;
            cell.appendChild(img);

            // Cambiar color de celda al pasar el ratón
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = '#ffcc00'; // Cambiar a color amarillo
            });

            cell.addEventListener('mouseleave', () => {
                cell.style.backgroundColor = '#007bff'; // Cambiar a color original
            });

            // Al hacer clic en la celda
            cell.addEventListener('click', () => {
                alert(`La capital de ${randomCountry.name} és ${randomCountry.capital}`);
            });

            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}

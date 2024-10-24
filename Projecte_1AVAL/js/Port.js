export class Port {
    constructor(data, container, ports) {
        this.data = data;
        this.container = container;
        this.ports = ports;  // Guardamos la lista de puertos para volver a ella
    }

    mostrarPuerto() {
        this.container.innerHTML = `
            <h2>${this.data.nombre}</h2>
            <ul>
                <li>Altitud: ${this.data.altitud} m</li>
                <li>Longitud: ${this.data.longitud} km</li>
                <li>Pendiente: ${this.data.pendiente}%</li>
                <li>Desnivel: ${this.data.desnivel} m</li>
                <li>Coeficiente APM: ${this.data.coeficienteAPM}</li>
            </ul>
            <img src="${this.data.imagen}" alt="${this.data.nombre}" style="width:250px">
            <br><br><br>
            <button id="volver-lista" style="padding:5px 10px; border: 1px solid black; border-radius:25px; background-color:#4a90e2;">Volver a la lista</button>  <!-- Botón Volver -->
        `;

        // Agregar funcionalidad al botón "Volver"
        document.getElementById('volver-lista').addEventListener('click', () => {
            Port.mostrarLista(this.ports, this.container);  // Volver a la lista de puertos
        });
    }

    static mostrarLista(ports, container) {
        container.innerHTML = ''; // Limpiar contenedor
        ports.forEach(portData => {
            const port = new Port(portData, container, ports);  // Pasamos la lista completa de puertos
            const portElement = document.createElement('div');
            portElement.innerHTML = `<p>${portData.nombre}</p>`;
            portElement.style.cursor = 'pointer';  // Añadimos el estilo de cursor para indicar que es clicable
            portElement.addEventListener('click', () => port.mostrarPuerto());  // Al hacer clic, mostramos el detalle del puerto
            container.appendChild(portElement);
        });
    }
}

export async function getPortsData() {
    try {
        const response = await fetch('./data/data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
        return {};
    }
}

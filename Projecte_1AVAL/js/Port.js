export class Port {
    constructor(data, container) {
        this.data = data;
        this.container = container;
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
        `;
    }

    static mostrarLista(ports, container) {
        container.innerHTML = '';
        ports.forEach(portData => {
            const port = new Port(portData, container);
            const portElement = document.createElement('div');
            portElement.innerHTML = `<p>${portData.nombre}</p>`;
            portElement.addEventListener('click', () => port.mostrarPuerto());
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
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
            <img src="${this.data.imagen}" alt="${this.data.nombre}">
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
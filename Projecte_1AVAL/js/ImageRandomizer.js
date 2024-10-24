export class ImageRandomizer {
    constructor(imageArray, container) {
        this.imageArray = imageArray;
        this.container = container;
        this.ultimaImagen = null;
    }

    mostrarImagenAleatoria() {
        let imagen;
        do {
            imagen = this.imageArray[Math.floor(Math.random() * this.imageArray.length)];
        } while (imagen === this.ultimaImagen);

        this.ultimaImagen = imagen;
        const imgElement = document.createElement('img');
        imgElement.src = imagen;
        imgElement.style.width = '200px'; 
        imgElement.style.height = '150px'; 
        this.container.innerHTML = '';
        this.container.appendChild(imgElement);
    }
}
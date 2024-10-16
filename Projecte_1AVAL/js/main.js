
import {Cyclist} from './Cyclist.js'
import {Port} from './Port.js'
import {Countdown} from './Countdown.js'
import {FormValidation} from './FormValidation.js'
import {ImageRandomizer} from './ImageRandomizer.js'


document.addEventListener("DOMContentLoaded", () => {
    // Variables iniciales
    const selectPorts = document.getElementById('select-ports');
    const contenedor = document.getElementById('contenedor');
    const resetButton = document.getElementById('reset');
    const contactButton = document.getElementById('contact');
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit');
    const formErrors = document.getElementById('form-errors');
    const countdownElement = document.getElementById('countdown');
    const imagenesAleatorias = document.getElementById('imagenes-aleatorias');

    const ciclistas = {
        pogacar: new Cyclist(document.getElementById('tadej-pogacar'), 'destacado_blau'),
        vingeard: new Cyclist(document.getElementById('jonas-vingegaard'), 'destacado_blau'),
        imgPogacar: document.getElementById('pogacar'),
        imgVingegaard: document.getElementById('vingegaard')
    };

    const formData = {
        nombre: document.getElementById('nombre'),
        apellidos: document.getElementById('apellidos'),
        genero: document.querySelectorAll('input[name="genero"]'),
        tipoBici: [
            document.getElementById('carretera'),
            document.getElementById('gravel'),
            document.getElementById('rigida'),
            document.getElementById('doble'),
            document.getElementById('electrica')
        ]
    };

    // Cargar datos del JSON externo
    fetch('./data/data.json')
        .then(response => response.json())
        .then(jsonData => {
            // Inicializa el contenido de los puertos
            selectPorts.addEventListener('change', () => {
                const value = selectPorts.value;
                if (value === 'pirineus') {
                    Port.mostrarLista(jsonData.pirineus, contenedor);
                } else if (value === 'pics') {
                    Port.mostrarLista(jsonData.pics_de_europa, contenedor);
                } else {
                    Port.mostrarLista([...jsonData.pirineus, ...jsonData.pics_de_europa], contenedor);
                }
            });

            resetButton.addEventListener('click', () => {
                contenedor.innerHTML = '';
                selectPorts.selectedIndex = 0;
            });

            contactButton.addEventListener('click', () => {
                document.getElementById('formulario-contacto').style.display = 'block'; // Cambiado de contactForm a formulario-contacto
                contactButton.style.display = 'none';
            });
            

            // Validación del formulario
            const formValidation = new FormValidation(formData, submitButton, formErrors);
            contactForm.addEventListener('input', () => formValidation.validate());

            // Reloj cuenta atrás para el Tour de Francia
            const countdown = new Countdown('2024-06-29T16:00:00', countdownElement);
            setInterval(() => countdown.actualizar(), 1000);

            // Imágenes aleatorias
            const imagenArray = [
                'https://plus.unsplash.com/premium_photo-1671100502325-8870ff9ba5c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2ljbGlzdGF8ZW58MHx8MHx8fDA%3D',
                'https://media.istockphoto.com/id/1402134774/es/foto/ciclista-profesional-de-carretera-en-un-paseo-de-entrenamiento.jpg?s=612x612&w=0&k=20&c=THUme21Ku_ylAJquBmw0v5qqcNvWUL2-FMeIQqKcYII=',
                'https://media.gettyimages.com/id/1406148993/es/foto/joven-negro-sonriente-disfrutando-del-deporte-con-amigos-en-la-naturaleza.jpg?s=612x612&w=gi&k=20&c=42Q_2eCh0LlJeb8BcfHKqVN6HcJEJz_UotAHU6uNEK8=', 
                'https://www.shutterstock.com/image-photo/happy-woman-cyclist-helmet-rides-260nw-2501692837.jpg',
                'https://st3.depositphotos.com/9843368/12606/i/950/depositphotos_126061180-stock-photo-cyclists-with-bicycles-in-autumn.jpg'
            ];
            const imageRandomizer = new ImageRandomizer(imagenArray, imagenesAleatorias);
            setInterval(() => imageRandomizer.mostrarImagenAleatoria(), 2000);

            // Eventos de imágenes de ciclistas
            ciclistas.imgPogacar.addEventListener('click', () => {
                ciclistas.pogacar.element.style.display = 'block';
                ciclistas.vingeard.element.style.display = 'none';
            });

            ciclistas.imgVingegaard.addEventListener('click', () => {
                ciclistas.vingeard.element.style.display = 'block';
                ciclistas.pogacar.element.style.display = 'none';
            });

            // Agregar eventos a los ciclistas
            ciclistas.pogacar.agregarEventos();
            ciclistas.vingeard.agregarEventos();

            // Carga inicial
            Port.mostrarLista([...jsonData.pirineus, ...jsonData.pics_de_europa], contenedor);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

import { getPortsData } from './Port.js';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ydGkiLCJhIjoiY2xvaWNwMTkyMW9ubjJxbjA5aTg2YmFycyJ9.w0zdUqxA_kjatKYu7sdneA';

document.addEventListener("DOMContentLoaded", async () => {
    const portsData = await getPortsData();

    // Crear el mapa centrado en una coordenada inicial
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-0.2596927, 39.0778795], // Coordenadas iniciales
        zoom: 9
    });

    // Añadir controles de navegación
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));

    // Añadir eventos a los botones para centrar el mapa en los puertos
    document.getElementById('showUserLocation').addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const userCoords = { lat: pos.coords.latitude, lon: pos.coords.longitude };
            centerMap(map, userCoords);
        });
    });

    document.getElementById('showTourmalet').addEventListener('click', () => {
        centerMap(map, { lat: portsData.pirineus[0].latitud, lon: portsData.pirineus[0].longitud });
    });
    
    document.getElementById('showGallina').addEventListener('click', () => {
        centerMap(map, { lat: portsData.pirineus[1].latitud, lon: portsData.pirineus[1].longitud });
    });
    
    document.getElementById('showCovadonga').addEventListener('click', () => {
        centerMap(map, { lat: portsData.pics_de_europa[0].latitud, lon: portsData.pics_de_europa[0].longitud });
    });
    
    document.getElementById('showAngliru').addEventListener('click', () => {
        centerMap(map, { lat: portsData.pics_de_europa[1].latitud, lon: portsData.pics_de_europa[1].longitud });
    });
    
    
});

// Función para centrar el mapa en las coordenadas proporcionadas
function centerMap(map, coords) {
    map.flyTo({
        center: [coords.lon, coords.lat],
        zoom: 10,
        speed: 1.5,
        curve: 1
    });
}

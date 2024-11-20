// Asegúrate de que el mapa solo se inicialice una vez que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ydGkiLCJhIjoiY2xvaWNwMTkyMW9ubjJxbjA5aTg2YmFycyJ9.w0zdUqxA_kjatKYu7sdneA';

    // Crear el mapa
    const map = new mapboxgl.Map({
        container: 'map', // ID del div donde se insertará el mapa
        style: 'mapbox://styles/mapbox/streets-v12', // Estilo inicial
        center: [2.1734, 41.3851], // Coordenadas iniciales (Barcelona)
        zoom: 12 // Zoom inicial
    });

    // Función para cambiar el estilo del mapa
    function setStyle(style) {
        map.setStyle(style);
    }

    // Agregar controles de navegación
    map.addControl(new mapboxgl.NavigationControl());

    // Agregar un control para localizar la posición del usuario
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
    }));

    // Crear un marcador personalizado
    const marker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat([2.1734, 41.3851]) // Coordenadas del marcador
        .setPopup(new mapboxgl.Popup().setText('Benvingut a Barcelona!')) // Popup del marcador
        .addTo(map);

    // Crear otro marcador con un ícono personalizado
    const iconMarker = document.createElement('div');
    iconMarker.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
    iconMarker.style.width = '32px';
    iconMarker.style.height = '39px';

    new mapboxgl.Marker(iconMarker)
        .setLngLat([2.1841, 41.4006]) // Coordenadas para la Sagrada Família
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Sagrada Família</h3><p>Un dels llocs més emblemàtics de Barcelona.</p>'))
        .addTo(map);

    // Asignar eventos a los botones
    document.getElementById('streetViewBtn').addEventListener('click', function() {
        setStyle('mapbox://styles/mapbox/streets-v12');
    });

    document.getElementById('satelliteViewBtn').addEventListener('click', function() {
        setStyle('mapbox://styles/mapbox/satellite-v9');
    });
});

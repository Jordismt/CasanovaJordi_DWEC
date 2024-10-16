// Función para contar enlaces
function contarEnlaces() {
    const enlaces = document.querySelectorAll('a');
    alert(`Número de enlaces: ${enlaces.length}`);
}

// Función para modificar el logo
function modificarLogo(nuevaRuta, nuevoAlt) {
    const logo = document.querySelector('#header img');
    if (logo) {
        logo.src = nuevaRuta;
        logo.alt = nuevoAlt;
    }
}

// Función para modificar el menú
function modificarMenu(nuevosTextos) {
    const menuItems = document.querySelectorAll('#menu ul li a .title');
    menuItems.forEach((item, index) => {
        if (nuevosTextos[index]) {
            item.textContent = nuevosTextos[index];
        }
    });
}


// Función para eliminar enlaces favoritos
function eliminarFavoritos() {
    const favoriteLinks = document.querySelector('.submenu2');
    if (favoriteLinks) {
        favoriteLinks.remove();
    }
}

// Función principal para modificar la página
function modificarPagina() {
    contarEnlaces();
    modificarLogo('images/icon_samples.gif', 'Nuevo Logo');
    modificarMenu(['Nou Contingut', 'Nous Vídeos', 'Contacta']);
    eliminarFavoritos();
}

// Espera a que el DOM esté cargado para ejecutar la función
document.addEventListener("DOMContentLoaded", modificarPagina);

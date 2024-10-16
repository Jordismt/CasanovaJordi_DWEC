// Módulo MenuManager para manejar los menús principal y secundario
const MenuManager = (function () {
    // Cambia dinámicamente el texto de los menús
    const updateMenuText = (menuId, newTextArray) => {
        const menu = document.getElementById(menuId);
        if (!menu) return;
        
        const menuItems = menu.querySelectorAll('li a');
        menuItems.forEach((item, index) => {
            if (newTextArray[index]) {
                item.textContent = newTextArray[index];
            }
        });
    };

    // Cambia la clase de los menús para aplicar estilos dinámicamente
    const updateMenuClass = (menuId, newClass) => {
        const menu = document.getElementById(menuId);
        if (!menu) return;

        const menuItems = menu.querySelectorAll('li a');
        menuItems.forEach(item => {
            item.className = newClass;
        });
    };

    return {
        updateMenuText,
        updateMenuClass
    };
})();

// Módulo ContentManager para manejar el contenido del div con id="content"
const ContentManager = (function () {
    // Borra el contenido de un div dado por su id
    const clearContent = (divId) => {
        const contentDiv = document.getElementById(divId);
        if (contentDiv) {
            while (contentDiv.firstChild) {
                contentDiv.removeChild(contentDiv.firstChild);
            }
        }
    };

    // Añade párrafos al div especificado con el texto proporcionado
    const addParagraphs = (divId, paragraphs) => {
        const contentDiv = document.getElementById(divId);
        if (contentDiv) {
            paragraphs.forEach(text => {
                const paragraph = document.createElement('p');
                const textNode = document.createTextNode(text);
                paragraph.appendChild(textNode);
                contentDiv.appendChild(paragraph);
            });
        }
    };

    return {
        clearContent,
        addParagraphs
    };
})();

// Ejecución del script
document.addEventListener('DOMContentLoaded', () => {
    // Cambiar el texto de los menús principal y secundario
    MenuManager.updateMenuText('menu', ['Inicio', 'Servicios', 'Sobre Nosotros', 'Contacto', 'Blog']);
    MenuManager.updateMenuText('sidebar', ['Enlace Uno', 'Enlace Dos', 'Enlace Tres', 'Enlace Cuatro', 'Enlace Cinco']);

    // Cambiar la clase de los menús para aplicar un nuevo estilo (asumiendo que la clase "new-style" está definida en CSS)
    MenuManager.updateMenuClass('menu', 'new-style');
    MenuManager.updateMenuClass('sidebar', 'new-style');

    // Modificar el contenido del div con id="content"
    ContentManager.clearContent('content');
    ContentManager.addParagraphs('content', [
        'Este es el primer párrafo predefinido.',
        'Este es el segundo párrafo predefinido.',
        'Y este es el tercer párrafo predefinido.'
    ]);

});

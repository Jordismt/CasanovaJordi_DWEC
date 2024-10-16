function modificarPagina() {
    // 1. Modificar el text del menú principal
    const menuItems = document.querySelectorAll('#menu ul li a');
    const nousTextosMenu = ['Nou Enllaç 1', 'Nou Enllaç 2', 'Nou Enllaç 3', 'Nou Enllaç 4', 'Nou Enllaç 5'];
    
    menuItems.forEach((item, index) => {
        if (nousTextosMenu[index]) {
            item.textContent = nousTextosMenu[index];
            item.style.color = 'blue'; // Canviar color del text
        }
    });

    // 2. Modificar el text del menú secundari
    const sidebarItems = document.querySelectorAll('#sidebar ul li a');
    const nousTextosSidebar = ['Nou Enllaç 1', 'Nou Enllaç 2', 'Nou Enllaç 3', 'Nou Enllaç 4', 'Nou Enllaç 5'];

    sidebarItems.forEach((item, index) => {
        if (nousTextosSidebar[index]) {
            item.textContent = nousTextosSidebar[index];
            item.style.color = 'green'; // Canviar color del text
        }
    });

    // 3. borrar contingut de #content i afegir paràgrafs predefinits
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <p>Aquest és el primer paràgraf predefinit.</p>
        <p>Aquest és el segon paràgraf predefinit.</p>
        <p>Aquest és el tercer paràgraf predefinit.</p>
    `;
}

// Espera a que el DOM estigua carregat per executar la funció
document.addEventListener("DOMContentLoaded", modificarPagina);

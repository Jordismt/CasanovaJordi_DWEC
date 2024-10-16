function displayRandomImage() {
    // Obtener el div con id "content"
    const contentDiv = document.getElementById('content');
    
    // Lista de URLs de imágenes aleatorias (debes cambiar estas URL por las que quieras usar)
    const imageUrls = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Fj0zoSD0e4V7siSTI221US9cMrtjc8A2og&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51BMMUr2H27skg69TPo-ohN15vKM_fFeX0A&s',
        'https://proximahost.es/blog/wp-content/uploads/2022/01/java.jpg'
    ];
    
    // Seleccionar una imagen aleatoria
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    
    // Crear el HTML de la imagen y reemplazar el contenido del div
    contentDiv.innerHTML = `<img src="${randomImageUrl}" alt="Random Image" styles: width=250px;  />`;
}

// Ejecutar la función al cargar la página
window.onload = displayRandomImage;

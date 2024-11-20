// Guardar informació en Local Storage
localStorage.setItem("nom", "Jordi");
localStorage.setItem("cognoms", "Casanova");
localStorage.setItem("email", "jordi@gmail.com");

// Mostrar la informació en l'HTML
const localStorageInfo = `
    Nom: ${localStorage.getItem("nom")}<br>
    Cognoms: ${localStorage.getItem("cognoms")}<br>
    Email: ${localStorage.getItem("email")}
`;

document.getElementById("local-storage-info").innerHTML = localStorageInfo;

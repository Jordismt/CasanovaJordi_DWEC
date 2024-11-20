// Funció per establir una cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Funció per obtenir una cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

// Guardar informació amb cookies
setCookie("nom", "Joan", 1); // Expira en un dia
setCookie("cognoms", "Martínez", 1);
setCookie("email", "joan.martinez@example.com", 1);

// Mostrar la informació de cookies en l'HTML
const cookiesInfo = `
    Nom: ${getCookie("nom")}<br>
    Cognoms: ${getCookie("cognoms")}<br>
    Email: ${getCookie("email")}
`;

document.getElementById("cookies-info").innerHTML = cookiesInfo;

// Resposta a la pregunta sobre cookies
const response = `
    Si no especifiques una data d'expiració, la cookie expira en tancar el navegador.
`;
document.getElementById("response").innerText = response;

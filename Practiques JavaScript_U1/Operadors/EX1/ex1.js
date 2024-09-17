function calcularQuadrat() {
    // Demanar un número al usuari entre 0 i 50
    let num = parseFloat(prompt("Introduix un número entre 0 i 50:"));
    
    // Comprovar si és un número vàlid
    if (isNaN(num) || num < 0 || num > 50) {
        document.getElementById('resultado').textContent = "Perfavor, introdueix un número vàlid entre 0 i 50.";
    } else {
        // Calcular el quadrat del número
        let quadrat = Math.pow(num, 2);
        document.getElementById('resultado').textContent = `El quadrat de ${num} és: ${quadrat}`;
    }
}
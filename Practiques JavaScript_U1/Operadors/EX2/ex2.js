function comprovarEnter() {
    // Demanar un número al usuari
    let num = parseFloat(prompt("Introdueix un número:"));
    
    // Comprovar si és un número vàlid
    if (isNaN(num)) {
        document.getElementById('resultado').textContent = "Perfavor, introdueix un número vàlid.";
    } else {
        // Comprovar si és un enter
        if (Number.isInteger(num)) {
            document.getElementById('resultado').textContent = `El número ${num} és un enter.`;
        } else {
            document.getElementById('resultado').textContent = `El número ${num} no és un enter.`;
        }
    }
}
function convertirEnterAFloat() {
    // Demanar un número enter al usuari
    let num = prompt("Introdueix un número enter:");
    
    // Comprovar si és un número vàlid i si és un enter
    if (isNaN(num) || !Number.isInteger(Number(num))) {
        document.getElementById('resultado').textContent = "Perfavor, introdueix un número enter vàlid.";
    } else {
        // Convertir a float
        let numFloat = parseFloat(num);
        let numFinal=numFloat.toFixed(2)
        document.getElementById('resultado').textContent = `El número convertit a float és: ${numFinal}`;
    }
}
    
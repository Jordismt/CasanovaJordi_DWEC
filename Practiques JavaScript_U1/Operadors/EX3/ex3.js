function redondejarNumero() {
    // Demanar un número al usuari
    let num = parseFloat(prompt("Introdueix un número:"));
    
    // Comprovar si és un número vàlid
    if (isNaN(num)) {
        document.getElementById('resultado').textContent = "Si us plau, introdueix un número vàlid.";
    } else {
        // Redondejar a dues xifres decimals
        let redondejat = num.toFixed(2);
        document.getElementById('resultado').textContent = `El número redondejat a dues decimals és: ${redondejat}`;
    }
}
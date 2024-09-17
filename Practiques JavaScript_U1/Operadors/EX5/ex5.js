function calcularArea() {
    // Obtenir el radi del camp d'entrada
    let radi = document.getElementById('radi').value;

    // Comprovar si és un número vàlid
    if (isNaN(radi) || radi <= 0) {
        document.getElementById('resultado').textContent = "Perfavor, introdueix un número vàlid per al radi.";
        document.getElementById('resultado').classList.add('error');
    } else {
        // Calcular l'àrea de la circumferència (π * r^2)
        let area = Math.PI * Math.pow(radi, 2);

        // Mostrar el resultat
        document.getElementById('resultado').textContent = `L'àrea de la circumferència és: ${area.toFixed(2)} unitats quadrades.`;
        document.getElementById('resultado').classList.remove('error');
    }
}
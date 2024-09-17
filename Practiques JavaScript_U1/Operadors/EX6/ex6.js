function calcularDivisio() {
    // Obtenir els números
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    // Comprovar si són números vàlids
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Si us plau, introdueix números vàlids.";
        document.getElementById('resultado').classList.add('error');
        return;
    }

    // Determinar el major i menor
    let mayor, menor;
    if (num1 > num2) {
        mayor = num1;
        menor = num2;
    } else {
        mayor = num2;
        menor = num1;
    }

    // Comprovar que el menor no sigui 0 (per evitar divisió entre 0)
    if (menor === 0) {
        document.getElementById('resultado').textContent = "La divisió per zero no és vàlida.";
        document.getElementById('resultado').classList.add('error');
        return;
    }

    // Realitzar la divisió
    let resultat = mayor / menor;
    let partEntera = Math.floor(resultat); // Part entera
    let resto = mayor % menor; // Resto

    // Mostrar els resultats
    document.getElementById('resultado').textContent = 
        `El major és: ${mayor}\n` +
        `El menor és: ${menor}\n` +
        `Resultat total: ${resultat.toFixed(2)}\n` +
        `Part entera: ${partEntera}\n` +
        `Resto: ${resto}`;
    document.getElementById('resultado').classList.remove('error');
}
function generarNumerosAleatorios() {
    const numeros = new Set();
    while (numeros.size < 6) {
        const num = Math.floor(Math.random() * 49) + 1;
        numeros.add(num);
    }
    return Array.from(numeros);
}

function verificarApuesta() {
    const numerosGenerados = generarNumerosAleatorios();
    const numerosUsuario = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value),
        parseInt(document.getElementById('num4').value),
        parseInt(document.getElementById('num5').value),
        parseInt(document.getElementById('num6').value)
    ];

    const numerosUsuarioSet = new Set(numerosUsuario);
    
    // Verificar si todos los números son válidos
    if (numerosUsuarioSet.size !== 6 || !numerosUsuario.every(num => num >= 1 && num <= 49)) {
        document.getElementById('result').textContent = "Todos los números deben estar entre 1 y 49 y deben ser únicos.";
        return;
    }

    const aciertos = numerosGenerados.filter(num => numerosUsuarioSet.has(num)).length;

    document.getElementById('result').innerHTML = `
        Números generados: ${numerosGenerados.join(', ')}<br>
        Tu apuesta: ${numerosUsuario.join(', ')}<br>
        Has acertado ${aciertos} número(s).
    `;
}

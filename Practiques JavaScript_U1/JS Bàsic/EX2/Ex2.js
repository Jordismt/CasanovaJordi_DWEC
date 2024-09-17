// Función para generar un número entero aleatorio entre min y max
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar un array con 15 números aleatorios entre 1 y 100
function generarArrayAleatorio() {
    let array = [];
    for (let i = 0; i < 15; i++) {
        array.push(generarNumeroAleatorio(1, 100));
    }
    return array;
}

// Función para encontrar el mínimo valor de un array
function encontrarMinimo(array) {
    let min = array[0]; // Asignar el primer valor como mínimo inicial
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]; // Si encontramos un valor menor, actualizamos min
        }
    }
    return min;
}

// Función para encontrar el máximo valor de un array
function encontrarMaximo(array) {
    let max = array[0]; // Asignar el primer valor como máximo inicial
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; // Si encontramos un valor mayor, actualizamos max
        }
    }
    return max;
}

// Función que se ejecuta al hacer clic en el botón
function procesarArray() {
    let arrayAleatorio = generarArrayAleatorio(); // Generar el array
    let minimo = encontrarMinimo(arrayAleatorio); // Encontrar el mínimo
    let maximo = encontrarMaximo(arrayAleatorio); // Encontrar el máximo

    // Mostrar el array y los resultados en el HTML
    document.getElementById("resultadoArray").textContent = "Array generado: " + arrayAleatorio.join(", ");
    document.getElementById("resultadoMinimo").textContent = "Valor mínimo: " + minimo;
    document.getElementById("resultadoMaximo").textContent = "Valor máximo: " + maximo;
}

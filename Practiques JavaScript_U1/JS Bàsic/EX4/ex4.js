function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarArrayAleatorio() {
    let array = [];
    for (let i = 0; i < 15; i++) {
        array.push(generarNumeroAleatorio(1, 100));
    }
    return array;
}

function ordenarArrayBurbuja(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Intercambiar elementos
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

function generarYOrdenarArray() {
    let arrayOriginal = generarArrayAleatorio();
    let arrayOrdenado = [...arrayOriginal]; // Copiar el array para ordenarlo

    // Mostrar el array original
    document.getElementById('arrayOriginal').textContent = "Array original: " + arrayOriginal.join(", ");

    // Ordenar el array
    ordenarArrayBurbuja(arrayOrdenado);

    // Mostrar el array ordenado
    document.getElementById('arrayOrdenado').textContent = "Array ordenado: " + arrayOrdenado.join(", ");
}

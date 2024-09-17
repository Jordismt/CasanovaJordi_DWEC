function mostrarMenu() {
    let opcion;
    
    do {
        opcion = prompt(
            "Selecciona una opción:\n" +
            "1. Sumar\n" +
            "2. Restar\n" +
            "3. Multiplicar\n" +
            "4. Dividir\n" +
            "5. Eixir"
        );
        
        switch(opcion) {
            case '1':
                realizarOperacion('sumar');
                break;
            case '2':
                realizarOperacion('restar');
                break;
            case '3':
                realizarOperacion('multiplicar');
                break;
            case '4':
                realizarOperacion('dividir');
                break;
            case '5':
                alert("Saliendo...");
                return; // Sale del bucle y finaliza el programa
            default:
                alert("Opción no válida. Por favor, selecciona una opción entre 1 y 5.");
        }
    } while (true);
}

function realizarOperacion(operacion) {
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, introduce números válidos.");
        return;
    }

    switch(operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            resultado = num1 / num2;
            break;
    }

    // Mostrar el resultado en un alert
    alert(`Resultado: ${resultado}`);
}

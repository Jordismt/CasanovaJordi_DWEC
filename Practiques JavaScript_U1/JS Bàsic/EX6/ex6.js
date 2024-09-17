function sumarHasta1000() {
    let suma = 0;

    while (suma < 1000) {
        let numero = parseFloat(prompt("Introduce un número para sumar:"));
        
        // Verifica si el valor introducido es un número válido
        if (isNaN(numero)) {
            alert("Por favor, introduce un número válido.");
            continue; // Pide otro número sin sumar el valor no válido
        }
        
        suma += numero;
    }

    // Muestra la suma final cuando se alcanza o supera 1000
    alert(`La suma final es ${suma}`);
}

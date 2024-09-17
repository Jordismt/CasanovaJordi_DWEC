function calcularIMC() {
    // Obtener los valores de altura y peso del formulario
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    // Validar que los valores sean números positivos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, ingrese valores válidos para altura y peso.");
        return;
    }

    // Calcular el IMC
    let imc = peso / (altura * altura);

    // Determinar el estado basado en el IMC
    let estado;
    if (imc < 18.5) {
        estado = "Peso insuficiente";
    } else if (imc >= 18.5 && imc < 25) {
        estado = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        estado = "Sobrepeso";
    } else {
        estado = "Obesidad";
    }

    // Mostrar el IMC y el estado en la página
    document.getElementById('resultadoIMC').textContent = `IMC: ${imc.toFixed(2)}`;
    document.getElementById('estado').textContent = estado;
}

//Eliminar resultados
function eliminarResultados() {
    // Limpiar los campos de entrada
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';

    // Limpiar los resultados
    document.getElementById('resultadoIMC').textContent = '';
    document.getElementById('estado').textContent = '';
}
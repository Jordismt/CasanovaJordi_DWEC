// Función que se ejecutará al hacer clic en el botón
function pedirNota() {
    let num_user = prompt("Dime tu nota:");
    let nota = parseFloat(num_user);

    // Verificar si es un número
    if (isNaN(nota)) {
        alert("No has ingresado un número válido.");
    } 
    // Verificar si la nota está dentro del rango válido
    else if (nota > 10 || nota < 0) {
        alert("Número no válido. Debe estar entre 0 y 10.");
    } 
    // Clasificar la nota
    else {
        if (nota >= 9) {
            alert("Sobresaliente");
        } else if (nota >= 7 && nota <=8.9) {
            alert("Notable");
        } else if (nota >=6 && nota <=6.9){
            alert("Bé");
        } else if (nota >= 5 && nota <= 5.9) {
            alert("Suficient");
        } else {
            alert("Insuficient");
        }
    }
}

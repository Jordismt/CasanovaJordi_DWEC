document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');
    const submitButton = document.getElementById('submitButton');

    // Función para validar un campo individual
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;

        if (value.length < 3) {
            field.classList.add('error');
            field.classList.remove('valid');
            isValid = false;
        } else if (/[0-9]/.test(value) && field.type === 'text') {
            field.classList.add('error');
            field.classList.remove('valid');
            isValid = false;
        } else {
            field.classList.add('valid');
            field.classList.remove('error');
        }
        return isValid;
    }

    // Función para validar el formulario completo
    function validateForm() {
        const fields = [
            { field: document.getElementById('nombre'), errorDiv: document.getElementById('nombreError') },
            { field: document.getElementById('correo'), errorDiv: document.getElementById('correoError') },
            { field: document.getElementById('contrasena'), errorDiv: document.getElementById('contrasenaError') },
            { field: document.getElementById('fecha_nacimiento'), errorDiv: document.getElementById('fechaError') },
            { field: document.getElementById('numero'), errorDiv: document.getElementById('numeroError') },
            { field: document.getElementById('seleccion'), errorDiv: document.getElementById('seleccionError') },
        ];

        let allValid = true;

        fields.forEach(({ field, errorDiv }) => {
            if (!validateField(field)) {
                errorDiv.textContent = "Este campo debe tener al menos 3 letras y no puede contener números.";
                allValid = false;
            } else {
                errorDiv.textContent = "";
            }
        });

        // Validación para el checkbox
        const checkbox = document.getElementById('checkbox');
        if (!checkbox.checked) {
            document.getElementById('checkboxError').textContent = "Debes aceptar los términos y condiciones.";
            allValid = false;
        } else {
            document.getElementById('checkboxError').textContent = "";
        }

        // Validación para los radios
        const radio1 = document.getElementById('radio1');
        const radio2 = document.getElementById('radio2');
        if (!radio1.checked && !radio2.checked) {
            document.getElementById('radioError').textContent = "Debes seleccionar una opción.";
            allValid = false;
        } else {
            document.getElementById('radioError').textContent = "";
        }

        submitButton.disabled = !allValid; // Habilitar o deshabilitar el botón de envío
    }

    // Manejar el evento de entrada para validar los campos
    form.addEventListener('input', validateForm);

    // Manejar el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const nombre = form.nombre.value;
        const correo = form.correo.value;
        const contrasena = form.contrasena.value;
        const fecha_nacimiento = form.fecha_nacimiento.value;
        const numero = form.numero.value;
        const seleccion = form.seleccion.value;
        const comentarios = form.comentarios.value;
        const opcion = radio1.checked ? radio1.value : radio2.value;

        alert(`Nombre: ${nombre}\nCorreo: ${correo}\nContraseña: ${contrasena}\nFecha de Nacimiento: ${fecha_nacimiento}\nNúmero: ${numero}\nOpción Seleccionada: ${seleccion}\nComentarios: ${comentarios}\nOpción Elegida: ${opcion}`);
    });
});
export class FormValidation {
    constructor(formData, submitButton, formErrors) {
        this.formData = formData;
        this.submitButton = submitButton;
        this.formErrors = formErrors;
    }

    validate() {
        let isValid = true;
        this.formErrors.innerHTML = '';

        if (this.formData.nombre.value.trim() === '') {
            isValid = false;
            this.formErrors.innerHTML += '<p>El nombre es obligatorio.</p>';
        }

        if (this.formData.apellidos.value.trim() === '') {
            isValid = false;
            this.formErrors.innerHTML += '<p>Los apellidos son obligatorios.</p>';
        }

        if (!Array.from(this.formData.genero).some(radio => radio.checked)) {
            isValid = false;
            this.formErrors.innerHTML += '<p>El género es obligatorio.</p>';
        }

        if (!this.formData.tipoBici.some(checkbox => checkbox.checked)) {
            isValid = false;
            this.formErrors.innerHTML += '<p>Selecciona al menos un tipo de bicicleta.</p>';
        }

        this.submitButton.disabled = !isValid;
    }
}
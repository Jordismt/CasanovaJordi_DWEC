export class Countdown {
    constructor(endDate, countdownElement) {
        this.endDate = new Date(endDate);
        this.countdownElement = countdownElement;
    }

    actualizar() {
        const ahora = new Date();
        const diferencia = this.endDate - ahora;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        this.countdownElement.innerHTML = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para el Tour de Francia.`;
    }
}
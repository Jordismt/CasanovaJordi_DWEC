export class Cyclist {
    constructor(cyclistElement, highlightClass) {
        this.element = cyclistElement;
        this.highlightClass = highlightClass;
    }

    agregarEventos() {
        this.element.addEventListener('mouseenter', () => {
            this.element.classList.remove('destacado_verd');
            this.element.classList.add(this.highlightClass);
        });

        this.element.addEventListener('mouseleave', () => {
            this.element.classList.remove(this.highlightClass);
            this.element.classList.add('destacado_verd');
        });
    }
}
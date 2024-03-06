import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

    private _color: string = 'red';
    private _errors?: ValidationErrors | null | undefined;
    private htmlElement?: ElementRef<HTMLElement>;

    @Input() set color(value: string) {
        this._color = value;
        this.setStyle();
    }

    @Input() set errors(value: ValidationErrors | null | undefined) {
        this._errors = value;
        this.setErrorMessage();
    }

    constructor(
        private elementRef: ElementRef<HTMLElement>
    ) {
        this.htmlElement = this.elementRef;
    }

    ngOnInit(): void {
        this.setStyle();
    }

    setErrorMessage(): void {
        if (!this.htmlElement) {
            return;
        }

        if (!this._errors) {
            this.htmlElement.nativeElement.innerHTML = '';
            return;
        }

        const errors: string[] = Object.keys(this._errors);

        if (errors.includes('required')) {
            this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido.';
            return;
        }

        if (errors.includes('minlength')) {
            const actualLength: number = this._errors!['minlength']['actualLength'];
            const requiredLength: number = this._errors!['minlength']['requiredLength'];

            this.htmlElement.nativeElement.innerHTML = `Mínimo ${ actualLength }/${ requiredLength } caracteres.`;
            return;
        }

        if (errors.includes('email')) {
            this.htmlElement.nativeElement.innerHTML = 'No tiene formato de correo.';
            return;
        }
    }

    setStyle(): void {
        if (!this.htmlElement) {
            return;
        }

        this.htmlElement.nativeElement.style.color = this._color;
    }

}

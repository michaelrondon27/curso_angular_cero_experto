import { FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {

    static getFieldError(form: FormGroup, fieldName: string): string | null {
        if (!form.controls[fieldName]) {
            return null;
        }

        const errors: ValidationErrors = form.controls[fieldName].errors ?? {};

        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'min':
                    return `Valor mínimo de ${ errors['min'].min }`;
                case 'minlength':
                    return `Mínimo de ${ errors['minlength'].requiredLength } caracteres`;

                case 'required':
                    return 'Este campo es requerido';
            }
        }

        return null;
    }

    static isValidField(form: FormGroup, fieldName: string): boolean | null {
        return (
            !!form.controls[fieldName].errors &&
            form.controls[fieldName].touched
        );
    }

}

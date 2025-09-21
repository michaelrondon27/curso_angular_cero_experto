import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {

    static getFieldError(form: FormGroup, fieldName: string): string | null {
        if (!form.controls[fieldName]) {
            return null;
        }

        const errors: ValidationErrors = form.controls[fieldName].errors ?? {};

        return this.getTextErrors(errors);
    }

    static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
        if (!formArray.controls.length) {
            return null;
        }

        const errors: ValidationErrors = formArray.controls[index].errors ?? {};

        return this.getTextErrors(errors);
    }

    static getTextErrors(errors: ValidationErrors): string | null {
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

    static isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
        return (
            formArray.controls[index].errors &&
            formArray.controls[index].touched
        );
    }

}

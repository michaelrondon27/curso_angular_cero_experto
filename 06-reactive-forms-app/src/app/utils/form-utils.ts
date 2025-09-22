import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {

    static emailPattern        : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    static namePattern         : string = '([a-zA-Z]+) ([a-zA-Z]+)';
    static notOnlySpacesPattern: string = '^[a-zA-Z0-9]+$';

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
                case 'email':
                    return 'El valor ingresado no es correo electrónico';

                case 'min':
                    return `Valor mínimo de ${ errors['min'].min }`;

                case 'minlength':
                    return `Mínimo de ${ errors['minlength'].requiredLength } caracteres`;

                case 'pattern':
                    if (errors['pattern'].requiredPattern === this.emailPattern) {
                        return 'El valor ingresado no luce como un correo electrónico';
                    }

                    return 'Error de patrón contra expresión regular';

                case 'required':
                    return 'Este campo es requerido';

                default:
                    return `Error de validación de controlado ${ key }`;
            }
        }

        return null;
    }

    static isFieldOneEqualFieldTwo(field1: string, field2: string): ValidationErrors | null {
        return (formGroup: AbstractControl) => {
            const field1Value: string = formGroup.get(field1)?.value;
            const field2Value: string = formGroup.get(field2)?.value;

            return field1Value === field2Value ? null : { passwordNotEqual: true };
        };
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

import { Component, inject, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
    selector: 'app-basic-page',
    imports: [
        JsonPipe,
        ReactiveFormsModule
    ],
    templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {

    private _formBuilder: FormBuilder = inject(FormBuilder);

    public myForm: WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        inStorage: [0, [Validators.min(0), Validators.required]],
        name: ['', [Validators.minLength(3), Validators.required]],
        price: [0, [Validators.min(10), Validators.required]]
    }));

    getFieldError(fieldName: string): string | null {
        if (!this.myForm().controls[fieldName]) {
            return null;
        }

        const errors: ValidationErrors = this.myForm().controls[fieldName].errors ?? {};

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

    isValidField(fieldName: string): boolean | null {
        return !!this.myForm().controls[fieldName].errors && this.myForm().controls[fieldName].touched;
    }

    onSave(): void {
        if (this.myForm().invalid) {
            this.myForm().markAllAsTouched();
            return;
        }

        console.log(this.myForm().value);

        this.myForm().reset({
            inStorage: 0,
            price: 0
        });
    }

}

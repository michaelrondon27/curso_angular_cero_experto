import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
    inStorage: 6,
    name: 'RTX 5090',
    price: 2500
};

@Component({
    selector: 'app-basic-page',
    templateUrl: './basic-page.component.html'
})
export class BasicPageComponent implements OnInit {

    public myForm: FormGroup = this.formBuilder.group({
        inStorage: [0, [Validators.required, Validators.min(0)]],
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: [0, [Validators.required, Validators.min(0)]]
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        // this.myForm.reset(rtx5090);
    }

    getFieldError(field: string): string | null {
        if (!this.myForm.controls[field]) return null;

        const errors = this.myForm.controls[field].errors || {};

        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'Este campo es requerido';

                    case 'minlength':
                        return `Mínimo ${ errors['minlength'].requiredLength } caracteres.`;
            }
        }

        return null;
    }

    isValidField(field: string): boolean | null {
        return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
    }

    onSave(): void {
        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            return;
        }

        this.myForm.reset({
            inStorage: 0,
            price: 0
        });
    }

}

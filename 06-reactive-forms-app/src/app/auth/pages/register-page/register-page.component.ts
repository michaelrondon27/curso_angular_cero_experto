import { Component, inject, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Utils
import { FormUtils } from '../../../utils/form-utils';

@Component({
    selector: 'app-register-page',
    imports: [
        JsonPipe,
        ReactiveFormsModule
    ],
    templateUrl: './register-page.component.html'
})
export default class RegisterPageComponent {

    private _formBuilder: FormBuilder = inject(FormBuilder);

    public formUtils: WritableSignal<typeof FormUtils> = signal<typeof FormUtils>(FormUtils);
    public myForm   : WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        email: ['', [Validators.pattern(this.formUtils().emailPattern),  Validators.required]],
        name: ['', [Validators.pattern(this.formUtils().namePattern), Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]],
        password2: ['', [Validators.required]],
        username: ['', [Validators.minLength(6), Validators.pattern(this.formUtils().notOnlySpacesPattern), Validators.required]]
    }, {
        validators: [
            this.formUtils().isFieldOneEqualFieldTwo('password', 'password2')
        ]
    }));

    onSubmit(): void {
        this.myForm().markAllAsTouched();

        console.log(this.myForm().value);
    }

}

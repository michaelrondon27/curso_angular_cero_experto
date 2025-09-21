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
        email: ['', [Validators.email, Validators.required]],
        name: ['', [Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]],
        password2: ['', [Validators.required]],
        username: ['', [Validators.minLength(6), Validators.required]]
    }));

    onSubmit(): void {
        this.myForm().markAllAsTouched();

        console.log(this.myForm().value);
    }

}

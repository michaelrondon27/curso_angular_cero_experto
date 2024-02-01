import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

    public myForm: FormGroup = this.formBuilder.group({
        email: ['', [Validators.required]],
        name: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required]],
        username: ['', [Validators.required]]
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

    isValidField(field: string) {

    }

    onSubmit() {
        this.myForm.markAllAsTouched();
    }

}

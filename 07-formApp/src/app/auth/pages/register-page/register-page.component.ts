import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as customValidators from '../../../shared/validators/validators';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

    public myForm: FormGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern)]],
        name: ['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required]],
        username: ['', [Validators.required, customValidators.cantBeStrider]]
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

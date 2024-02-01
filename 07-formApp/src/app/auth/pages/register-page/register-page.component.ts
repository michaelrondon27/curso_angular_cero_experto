import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';

// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

    public myForm: FormGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidatorService.validate]],
        name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required]],
        username: ['', [Validators.required, this.validatorsService.cantBeStrider]]
    }, {
        validators: [
            this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')
        ]
    } as AbstractControlOptions);

    constructor(
        private emailValidatorService: EmailValidatorService,
        private formBuilder: FormBuilder,
        private validatorsService: ValidatorsService
    ) { }

    isValidField(field: string) {
        return this.validatorsService.isValidField(this.myForm, field);
    }

    onSubmit() {
        this.myForm.markAllAsTouched();
    }

}

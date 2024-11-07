import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

    private formBuilder = inject(FormBuilder);

    public form: FormGroup = this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]]
    });

    login(): void {
        console.log(this.form.value);
    }

}

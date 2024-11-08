import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from 'app/auth/services/auth.service';

@Component({
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

    private authService: AuthService = inject(AuthService)
    private formBuilder: FormBuilder = inject(FormBuilder);

    public form: FormGroup = this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]]
    });

    login(): void {
        const { email, password } = this.form.value;

        this.authService.login(email, password).subscribe(success => {

        });
    }

}

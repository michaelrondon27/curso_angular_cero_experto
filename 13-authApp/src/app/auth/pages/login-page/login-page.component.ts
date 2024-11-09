import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

// Services
import { AuthService } from 'app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

    private authService: AuthService = inject(AuthService)
    private formBuilder: FormBuilder = inject(FormBuilder);
    private router     : Router = inject(Router);

    public form: FormGroup = this.formBuilder.group({
        email: ['michael@google.com', [Validators.email, Validators.required]],
        password: ['123456', [Validators.minLength(6), Validators.required]]
    });

    login(): void {
        const { email, password } = this.form.value;

        this.authService.login(email, password).subscribe({
            next: () => this.router.navigateByUrl('/dashboard'),
            error: (message) => Swal.fire('Error', message, 'error')
        });
    }

}

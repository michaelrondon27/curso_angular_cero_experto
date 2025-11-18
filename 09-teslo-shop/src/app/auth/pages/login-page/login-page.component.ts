import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Services
import { AuthService } from '@auth/services/auth.service';

@Component({
    selector: 'app-login-page',
    imports: [
        ReactiveFormsModule,
        RouterLink
    ],
    templateUrl: './login-page.component.html'
})
export default class LoginPageComponent {

    private _authService: AuthService = inject(AuthService);
    private _formBuilder: FormBuilder = inject(FormBuilder);
    private _router     : Router = inject(Router);

    public hasError : WritableSignal<boolean> = signal<boolean>(false);
    public isPosting: WritableSignal<boolean> = signal<boolean>(false);
    public loginForm: WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]]
    }));

    onSubmit(): void {
        if (this.loginForm().invalid) {
            this.hasError.set(true);

            setTimeout(() => {
                this.hasError.set(false);
            }, 2000);

            return;
        }

        const { email = '', password = '' } = this.loginForm().value;

        this._authService.login(email, password).subscribe({
            next: (resp: boolean) => {
                if (resp) {
                    this._router.navigate(['/']);

                    return;
                }

                this.hasError.set(true);

                setTimeout(() => {
                    this.hasError.set(false);
                }, 2000);
            }
        });
    }

}

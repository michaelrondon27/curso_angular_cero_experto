import { Component, EffectRef, Signal, computed, effect, inject } from '@angular/core';

// Enums
import { AuthStatus } from './auth/enums';

// Services
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    private authService: AuthService = inject(AuthService);
    private router     : Router = inject(Router);

    public finishedAuthCheck: Signal<boolean> = computed<boolean>(() => {
        if (this.authService.authStatus() === AuthStatus.checking) {
            return false;
        }

        return true;
    });

    public authStatusChangedEffect: EffectRef = effect(() => {
        switch (this.authService.authStatus()) {
            case AuthStatus.authenticated:
                this.router.navigateByUrl('/dashboard');
                return;

            case AuthStatus.checking:
                return;

            case AuthStatus.notAuthenticated:
                this.router.navigateByUrl('/auth/login');
                return;
        }
    });

}

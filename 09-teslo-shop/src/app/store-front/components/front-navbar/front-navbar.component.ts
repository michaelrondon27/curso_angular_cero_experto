import { Component, computed, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Interfaces
import { User } from '@auth/interfaces/user.interface';

// Services
import { AuthService } from '@auth/services/auth.service';

@Component({
    selector: 'front-navbar',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './front-navbar.component.html'
})
export class FrontNavbarComponent {

    private _authService: AuthService = inject(AuthService);

    public authStatus: Signal<string> = computed<string>(() => this._authService.authStatus());
    public user      : Signal<User | null> = computed<User | null>(() => this._authService.user());

    logout(): void {
        this._authService.logout();
    }

}

import { Component, computed, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Interfaces
import { User } from '@auth/interfaces/user.interface';

// Services
import { AuthService } from '@auth/services/auth.service';

@Component({
    selector: 'app-admin-dashboard-layout',
    imports: [
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ],
    templateUrl: './admin-dashboard-layout.component.html'
})
export default class AdminDashboardLayoutComponent {

    private _authService: AuthService = inject(AuthService);

    public user: Signal<User | null> = computed<User | null>(() => this._authService.user());

    onLogout(): void {
        this._authService.logout();
    }

}

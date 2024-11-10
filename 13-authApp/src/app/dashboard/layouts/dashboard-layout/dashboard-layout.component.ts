import { Component, Signal, WritableSignal, computed, inject } from '@angular/core';

// Interfaces
import { User } from 'app/auth/interfaces';

// Services
import { AuthService } from 'app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

    private authService: AuthService = inject(AuthService);

    public user: Signal<User | null> = computed(() => this.authService.currentUser());

    onLogout(): void {
        this.authService.logout();
    }

}

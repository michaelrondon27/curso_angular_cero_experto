import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
    selector: 'app-layout-page',
    templateUrl: './layout-page.component.html'
})
export class LayoutPageComponent {

    public sidebarItems = [
        {
            icon: 'label',
            label: 'Listado',
            url: './list'
        },
        {
            icon: 'add',
            label: 'Añadir',
            url: './new-hero'
        },
        {
            icon: 'search',
            label: 'Buscar',
            url: './search'
        }
    ];

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    get user(): User | undefined {
        return this.authService.currentUser;
    }

    onLogout(): void {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }

}

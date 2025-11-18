import { Routes } from '@angular/router';

// Guards
import { NotAuthenticatedGuard } from '@auth/guards/not-authenticated.guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/aurh-routes.routes'),
        canMatch: [
            NotAuthenticatedGuard
        ]
    },
    {
        path: '',
        loadChildren: () => import('./store-front/store-front.routes')
    }
];

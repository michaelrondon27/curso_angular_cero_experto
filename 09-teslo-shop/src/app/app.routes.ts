import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/aurh-routes.routes')
    },
    {
        path: '',
        loadChildren: () => import('./store-front/store-front.routes')
    }
];

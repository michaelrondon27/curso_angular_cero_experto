import { Routes } from "@angular/router";

export const authRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'sign-up',
                loadComponent: () => import('./pages/register-page/register-page.component')
            },
            {
                path: '**',
                redirectTo: 'sign-up'
            }
        ]
    }
];

export default authRoutes;

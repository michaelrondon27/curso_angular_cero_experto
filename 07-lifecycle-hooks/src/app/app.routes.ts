import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component')
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page.component')
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact-page/contact-page.component')
    },
    {
        path: '**',
        redirectTo: ''
    }
];

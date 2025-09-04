import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic',
        loadComponent: () => import('./pages/basic-page/basic-page.component'),
        title: 'Pipes Básicos'
    },
    {
        path: 'custom',
        loadComponent: () => import('./pages/custom-page/custom-page.component'),
        title: 'Pipes no tan comunes'
    },
    {
        path: 'numbers',
        loadComponent: () => import('./pages/numbers-page/numbers-page.component'),
        title: 'Numbers Pipes'
    },
    {
        path: 'uncommon',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page.component'),
        title: 'Pipes Personalizados'
    },
    {
        path: '**',
        redirectTo: 'basic'
    }
];

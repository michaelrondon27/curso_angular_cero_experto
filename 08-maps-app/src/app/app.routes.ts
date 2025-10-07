import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'fullscreen',
        loadComponent: () => import('./pages/fullscreen-map-page/fullscreen-map-page.component'),
        title: 'Fullscreen Map'
    },
    {
        path: 'houses',
        loadComponent: () => import('./pages/houses-page/houses-page.component'),
        title: 'Propiedades disponibles'
    },
    {
        path: 'markers',
        loadComponent: () => import('./pages/markers-page/markers-page.component'),
        title: 'Marcadores'
    },
    {
        path: '**',
        redirectTo: 'fullscreen'
    }
];

import { Routes } from "@angular/router";

export const reactiveRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                loadComponent: () => import('./pages/basic-page/basic-page.component'),
                title: 'Básicos'
            },
            {
                path: 'dynamic',
                loadComponent: () => import('./pages/dynamic-page/dynamic-page.component'),
                title: 'Dinámicos'
            },
            {
                path: 'switches',
                loadComponent: () => import('./pages/switches-page/switches-page.component'),
                title: 'Switches'
            },
            {
                path: '**',
                redirectTo: 'basic'
            }
        ]
    }
];

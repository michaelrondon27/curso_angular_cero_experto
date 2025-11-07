import { Routes } from "@angular/router";

export const storeFrontRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/store-front-layout/store-front-layout.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home-page/home-page.component')
            },
            {
                path: 'gender/:gender',
                loadComponent: () => import('./pages/gender-page/gender-page.component')
            },
            {
                path: 'product/:idSlug',
                loadComponent: () => import('./pages/product-page/product-page.component')
            },
            {
                path: '**',
                loadComponent: () => import('./pages/not-found-page/not-found-page.component')
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export default storeFrontRoutes;

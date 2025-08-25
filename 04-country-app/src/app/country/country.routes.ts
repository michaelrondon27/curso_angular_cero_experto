import { Routes } from "@angular/router";

export const countryRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/country-layout/country-layout.component'),
        children: [
            {
                path: 'by-capital',
                loadComponent: () => import('./pages/by-capital-page/by-capital-page.component')
            },
            {
                path: 'by-country',
                loadComponent: () => import('./pages/by-country-page/by-country-page.component')
            },
            {
                path: 'by-region',
                loadComponent: () => import('./pages/by-region-page/by-region-page.component')
            },
            {
                path: 'by/:code',
                loadComponent: () => import('./pages/country-page/country-page.component')
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            }
        ]
    }
];

export default countryRoutes;

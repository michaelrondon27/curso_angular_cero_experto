import { Routes } from "@angular/router";

export const countryRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/country-layout/country-layout.component'),
        children: [
            {
                path: 'by-capital',
                loadComponent: () => import('./pages/by-capital/by-capital.component')
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            }
        ]
    }
];

export default countryRoutes;

import { Routes } from "@angular/router";

export const adminDashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/admin-dashboard-layout/admin-dashboard-layout'),
        children: [
            {
                path: 'products',
                loadComponent: () => import('./pages/products-admin-page/products-admin-page')
            },
            {
                path: 'product/:id',
                loadComponent: () => import('./pages/product-admin-page/product-admin-page')
            }
        ]
    }
];

export default adminDashboardRoutes;

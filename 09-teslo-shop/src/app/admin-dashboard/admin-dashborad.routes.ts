import { Routes } from "@angular/router";

// Guards
import { IsAdminGuard } from "@auth/guards/is-admin.guard";

export const adminDashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/admin-dashboard-layout/admin-dashboard-layout.component'),
        children: [
            {
                path: 'products',
                loadComponent: () => import('./pages/products-admin-page/products-admin-page.component')
            },
            {
                path: 'products/:id',
                loadComponent: () => import('./pages/product-admin-page/product-admin-page.component')
            },
            {
                path: '**',
                redirectTo: 'products'
            }
        ],
        canMatch: [
            IsAdminGuard
        ]
    }
];

export default adminDashboardRoutes;

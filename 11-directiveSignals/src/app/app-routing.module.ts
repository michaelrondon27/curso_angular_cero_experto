import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
    },
    {
        path: '**',
        redirectTo: 'products'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }

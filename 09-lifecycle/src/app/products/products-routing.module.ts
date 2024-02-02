import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductComponent } from "./pages/product/product.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'product',
                component: ProductComponent
            },
            {
                path: '**',
                redirectTo: 'product'
            }
        ]
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class ProductsRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { ProductPageComponent } from "./pages/product-page/product-page.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'product',
                component: ProductPageComponent
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

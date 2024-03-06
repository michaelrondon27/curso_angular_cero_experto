import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Components
import { ProductPageComponent } from './pages/product-page/product-page.component';

// Routes
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    declarations: [
      ProductPageComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule { }

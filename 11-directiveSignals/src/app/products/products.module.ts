import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

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
        ReactiveFormsModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule { }

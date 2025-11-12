import { Component, inject, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Components
import { ProductCardComponent } from '@products/components/product-card/product-card.component';

// Interfaces
import { ProductsResponse } from '@products/interfaces/product.interface';

// Services
import { ProductsService } from '@products/services/products.service';

@Component({
    selector: 'app-home-page',
    imports: [
        ProductCardComponent
    ],
    templateUrl: './home-page.component.html'
})
export default class HomePageComponent {

    private _productsService: ProductsService = inject(ProductsService);

    public productsResource: ResourceRef<ProductsResponse | undefined> = rxResource<ProductsResponse, {}>({
        params: () => ({}),
        stream: ({ params }) => {
            return this._productsService.getProducts({});
        }
    });

}

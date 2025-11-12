import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Components
import { ProductCardComponent } from '@products/components/product-card/product-card.component';

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

    public productsResource = rxResource({
        params: () => ({}),
        stream: ({ params }) => {
            return this._productsService.getProducts({});
        }
    });

}

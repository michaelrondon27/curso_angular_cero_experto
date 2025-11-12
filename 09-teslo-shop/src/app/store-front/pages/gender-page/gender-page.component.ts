import { Component, inject, ResourceRef, Signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

// Components
import { ProductCardComponent } from '@products/components/product-card/product-card.component';

// Interfaces
import { ProductsResponse } from '@products/interfaces/product.interface';

// Services
import { ProductsService } from '@products/services/products.service';
@Component({
    selector: 'app-gender-page',
    imports: [
        ProductCardComponent
    ],
    templateUrl: './gender-page.component.html'
})
export default class GenderPageComponent {

    private _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
    private _productsService: ProductsService = inject(ProductsService);

    public gender: Signal<string | undefined> = toSignal<string>(this._activatedRoute.params.pipe(
        map(({ gender }) => gender)
    ));


    public productsResource: ResourceRef<ProductsResponse | undefined> = rxResource({
        params: () => ({ gender: this.gender() }),
        stream: ({ params }) => {
            return this._productsService.getProducts({ gender: params.gender });
        }
    });

}

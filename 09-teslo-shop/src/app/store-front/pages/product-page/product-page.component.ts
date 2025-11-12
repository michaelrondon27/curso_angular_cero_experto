import { Component, inject, ResourceRef, signal, WritableSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

// Components
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';

// Interfaces
import { Product } from '@products/interfaces/product.interface';

// Services
import { ProductsService } from '@products/services/products.service';

@Component({
    selector: 'app-product-page',
    imports: [
        ProductCarouselComponent
    ],
    templateUrl: './product-page.component.html'
})
export default class ProductPageComponent {

    private _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
    private _productsService: ProductsService = inject(ProductsService);

    public productIdSlug: WritableSignal<string> = signal<string>(
        this._activatedRoute.snapshot.params['idSlug']
    );

    public productResource: ResourceRef<Product | undefined> = rxResource({
        params: () => ({ idSlug: this.productIdSlug() }),
        stream: ({ params }) => this._productsService.getProductByIdSlug(params.idSlug)
    });

}

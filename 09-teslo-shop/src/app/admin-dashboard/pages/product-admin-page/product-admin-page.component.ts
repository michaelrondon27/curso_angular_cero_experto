import { Component, effect, inject, ResourceRef, Signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

// Interfaces
import { Product } from '@products/interfaces/product.interface';

// Services
import { ProductsService } from '@products/services/products.service';

@Component({
    selector: 'app-product-admin-page',
    imports: [],
    templateUrl: './product-admin-page.component.html'
})
export default class ProductAdminPageComponent {

    private _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
    private _productsService: ProductsService = inject(ProductsService);
    private _router         : Router = inject(Router);

    public productId: Signal<string| undefined> = toSignal<string | undefined>(this._activatedRoute.params.pipe(
        map((params => params['id']))
    ));

    public productResource: ResourceRef<Product | undefined> = rxResource({
        params: () => ({ id: this.productId() }),
        stream: ({ params }) => {
            return this._productsService.getProductById(params.id!)
        }
    });

    redirectEffect = effect(() =>  {
        if (this.productResource.error()) {
            this._router.navigate(['/admin/products']);
        }
    });

}

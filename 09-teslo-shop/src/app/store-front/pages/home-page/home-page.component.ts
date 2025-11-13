import { Component, inject, ResourceRef, Signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs';

// Components
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';

// Interfaces
import { ProductsResponse } from '@products/interfaces/product.interface';

// Services
import { ProductsService } from '@products/services/products.service';

@Component({
    selector: 'app-home-page',
    imports: [
        PaginationComponent,
        ProductCardComponent
    ],
    templateUrl: './home-page.component.html'
})
export default class HomePageComponent {

    private _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
    private _productsService: ProductsService = inject(ProductsService);

    public currentPage: Signal<number> = toSignal<number, 1>(this._activatedRoute.queryParamMap.pipe(
        map((params: ParamMap) => params.get('page') ? +params.get('page')! : 1),
        map((page: number) => isNaN(page) ? 1 : page)
    ), { initialValue: 1 });

    public productsResource: ResourceRef<ProductsResponse | undefined> = rxResource({
        params: () => ({ page: this.currentPage() - 1 }),
        stream: ({ params }) => {
            return this._productsService.getProducts({
                offset: params.page * 9
            });
        }
    });

}

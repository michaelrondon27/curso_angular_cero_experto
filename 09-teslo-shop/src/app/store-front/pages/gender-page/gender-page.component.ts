import { Component, inject, linkedSignal, ResourceRef, Signal, WritableSignal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

// Components
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';

// Interfaces
import { ProductsResponse } from '@products/interfaces/product.interface';

// Services
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { ProductsService } from '@products/services/products.service';
@Component({
    selector: 'app-gender-page',
    imports: [
        PaginationComponent,
        ProductCardComponent
    ],
    templateUrl: './gender-page.component.html'
})
export default class GenderPageComponent {

    private _activatedRoute   : ActivatedRoute = inject(ActivatedRoute);
    private _paginationService: PaginationService = inject(PaginationService);
    private _productsService  : ProductsService = inject(ProductsService);

    public currentPage: WritableSignal<number> = linkedSignal<number>(
        this._paginationService.currentPage
    );

    public gender: Signal<string | undefined> = toSignal<string>(this._activatedRoute.params.pipe(
        map(({ gender }) => gender)
    ));

    public productsResource: ResourceRef<ProductsResponse | undefined> = rxResource({
        params: () => ({
            gender: this.gender(),
            page: this.currentPage() - 1
        }),
        stream: ({ params }) => {
            return this._productsService.getProducts({
                gender: params.gender,
                offset: params.page * 9
            });
        }
    });

}

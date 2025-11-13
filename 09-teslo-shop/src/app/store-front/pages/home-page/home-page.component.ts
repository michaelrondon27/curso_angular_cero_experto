import { Component, inject, linkedSignal, ResourceRef, WritableSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Components
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';

// Interfaces
import { ProductsResponse } from '@products/interfaces/product.interface';

// Services
import { PaginationService } from '@shared/components/pagination/pagination.service';
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

    private _paginationService: PaginationService = inject(PaginationService);
    private _productsService  : ProductsService = inject(ProductsService);

    public currentPage: WritableSignal<number> = linkedSignal<number>(
        this._paginationService.currentPage
    );

    public productsResource: ResourceRef<ProductsResponse | undefined> = rxResource({
        params: () => ({ page: this.currentPage() - 1 }),
        stream: ({ params }) => {
            return this._productsService.getProducts({
                offset: params.page * 9
            });
        }
    });

}

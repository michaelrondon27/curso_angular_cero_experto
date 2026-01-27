import { Component, inject, linkedSignal, ResourceRef, signal, WritableSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

// Components
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { ProductsTableComponent } from '@products/components/products-table/products-table.component';

// Interfaces
import { ProductsResponse } from '@products/interfaces/product.interface';

// Services
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { ProductsService } from '@products/services/products.service';

@Component({
    selector: 'app-products-admin-page',
    imports: [
        PaginationComponent,
        ProductsTableComponent
    ],
    templateUrl: './products-admin-page.component.html'
})
export default class ProductsAdminPageComponent {

    private _paginationService: PaginationService = inject(PaginationService);
    private _productsService: ProductsService = inject(ProductsService);

    public productsPerPage: WritableSignal<number> = signal<number>(10);

    public currentPage: WritableSignal<number> = linkedSignal<number>(
        this._paginationService.currentPage
    );

    public productsResource: ResourceRef<ProductsResponse | undefined> = rxResource({
        params: () => ({
            limit: this.productsPerPage(),
            page: this.currentPage() - 1
        }),
        stream: ({ params }) => {
            return this._productsService.getProducts({
                limit: params.limit,
                offset: params.page * params.limit
            });
        }
    });

}

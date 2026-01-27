import { Component } from '@angular/core';

// Components
import { ProductsTableComponent } from '@products/components/products-table/products-table.component';

@Component({
    selector: 'app-products-admin-page',
    imports: [
        ProductsTableComponent
    ],
    templateUrl: './products-admin-page.component.html'
})
export default class ProductsAdminPageComponent { }

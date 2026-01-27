import { Component, input, InputSignal } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

// Interfaces
import { Product } from '@products/interfaces/product.interface';

// Pipes
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

@Component({
    selector: 'products-table',
    imports: [
        CurrencyPipe,
        NgClass,
        ProductImagePipe,
        RouterLink
    ],
    templateUrl: './products-table.component.html'
})
export class ProductsTableComponent {

    public products: InputSignal<Product[]> = input.required<Product[]>();

}

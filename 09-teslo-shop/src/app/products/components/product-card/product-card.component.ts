import { SlicePipe } from '@angular/common';
import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interfaces
import { Product } from '@products/interfaces/product.interface';

// Pipes
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

@Component({
    selector: 'product-card',
    imports: [
        ProductImagePipe,
        RouterLink,
        SlicePipe
    ],
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

    public product: InputSignal<Product> = input.required<Product>();

}

import { SlicePipe } from '@angular/common';
import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interfaces
import { Product } from '@products/interfaces/product.interface';

@Component({
    selector: 'product-card',
    imports: [
        RouterLink,
        SlicePipe
    ],
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

    public product: InputSignal<Product> = input.required<Product>();

    public imageUrl: Signal<string> = computed<string>(() => `http://localhost:3000/api/files/product/${ this.product().images[0] }`)

}

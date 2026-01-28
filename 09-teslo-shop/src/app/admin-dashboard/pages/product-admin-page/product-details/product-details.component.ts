import { Component, input, InputSignal, signal, WritableSignal } from '@angular/core';

// Components
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';

// Interfaces
import { Product } from '@products/interfaces/product.interface';

@Component({
    selector: 'product-details',
    imports: [
        ProductCarouselComponent
    ],
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {

    public sizes: WritableSignal<string[]> = signal<string[]>(['XS', 'S', 'M', 'L', 'XL', 'XXL']);

    public product: InputSignal<Product> = input.required<Product>();

}

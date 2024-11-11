import { ChangeDetectionStrategy, Component, EffectRef, InputSignal, OutputEmitterRef, effect, input, output } from '@angular/core';

// Interfaces
import { Product } from '@interfaces/product.interface';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [],
    templateUrl: 'product-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductCardComponent {

    public product: InputSignal<Product> = input.required<Product>();

    public onIncrementQuantity: OutputEmitterRef<number> = output<number>();

    public loginEffect: EffectRef = effect(() => {
        console.log(this.product().name);
    });

    incrementQuantity(): void {
        this.onIncrementQuantity.emit(this.product().quantity + 1);
    }

}

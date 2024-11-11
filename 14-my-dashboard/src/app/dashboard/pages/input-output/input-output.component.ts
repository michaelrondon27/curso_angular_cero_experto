import { ChangeDetectionStrategy, Component, OnDestroy, WritableSignal, signal } from '@angular/core';
import { Subscription, interval, take, tap } from 'rxjs';

// Components
import { ProductCardComponent } from './ui/product-card/product-card.component';

// Interfaces
import { Product } from '@interfaces/product.interface';

@Component({
    standalone: true,
    imports: [
        ProductCardComponent
    ],
    templateUrl: './input-output.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent implements OnDestroy {

    public products: WritableSignal<Product[]> = signal<Product[]>([
        {
            id: 1,
            name: 'Product 1',
            quantity: 0
        },
        {
            id: 2,
            name: 'Product 2',
            quantity: 0
        }
    ]);

    private intervalSubscription: Subscription = interval(1000).pipe(
        tap(() => {
            this.products.update((products: Product[]) => [
                ...products,
                {
                    id: products.length + 1,
                    name: `Product ${ products.length + 1 }`,
                    quantity: 0
                }
            ])
        }),
        take(7)
    ).subscribe();

    ngOnDestroy(): void {
        this.intervalSubscription.unsubscribe();
    }

    updateProduct(product: Product, quantity: number) {
        this.products.update((products: Product[]) => products.map((p: Product) => p.id === product.id ? { ...p, quantity } : p));
    }

}

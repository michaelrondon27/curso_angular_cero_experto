import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [],
    templateUrl: 'product-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductCardComponent {

}

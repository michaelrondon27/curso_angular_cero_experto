import { ChangeDetectionStrategy, Component } from '@angular/core';

// Components
import { ProductCardComponent } from './ui/product-card/product-card.component';

@Component({
    standalone: true,
    imports: [
        ProductCardComponent
    ],
    templateUrl: './input-output.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent {

}

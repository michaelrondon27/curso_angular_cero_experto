import { Component } from '@angular/core';

// Components
import { ProductCardComponent } from '@products/components/product-card/product-card.component';

@Component({
    selector: 'app-home-page',
    imports: [
        ProductCardComponent
    ],
    templateUrl: './home-page.component.html'
})
export default class HomePageComponent { }

import { Component, signal, WritableSignal } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
    selector: 'app-numbers-page',
    imports: [
        CurrencyPipe,
        DecimalPipe,
        PercentPipe
    ],
    templateUrl: './numbers-page.component.html'
})
export default class NumbersPageComponent {

    public percent   : WritableSignal<number> = signal<number>(0.4856);
    public totalSells: WritableSignal<number> = signal<number>(2433232.5567);

}

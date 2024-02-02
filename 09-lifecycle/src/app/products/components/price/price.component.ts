import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'products-price',
    templateUrl: './price.component.html'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

    @Input() public price: number = 0;

    ngOnInit(): void {
        console.log('Componente hijo: ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        console.log('Componente hijo: ngOnChanges');
    }

    ngOnDestroy(): void {
        console.log('Componente hijo: ngOnDestroy');
    }

}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'products-product-page',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    public currentPrice: number = 10;
    public isProductVisible: boolean = false;

    constructor() {
        console.log('Constructor');
    }

    ngOnInit(): void {
        console.log('ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        console.log('ngOnChanges');
    }

    ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

    increasePrice() {
        this.currentPrice++;
    }

}

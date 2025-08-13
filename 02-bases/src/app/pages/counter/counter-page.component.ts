import { Component } from '@angular/core';

@Component({
    templateUrl: './counter-page.component.html',
    styles: `
        button {
            margin: 5px 10px;
            padding: 5px;
            width: 75px;
        }
    `
})
export class CounterPageComponent {

    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    resetCounter(): void {
        this.counter = 10;
    }

}

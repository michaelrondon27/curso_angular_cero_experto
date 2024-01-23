import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    public title: string = 'Mi primera app de Angular';
    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    resetCounter() {
        this.counter = 10;
    }

}

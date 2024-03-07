import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
    templateUrl: './counter-page.component.html',
    styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

    public counter: WritableSignal<number> = signal<number>(10);
    public squareCounter: Signal<number> = computed<number>(() => this.counter() * this.counter());

    increaseBy(value: number): void {
        this.counter.update(current => current + value);
    }

}

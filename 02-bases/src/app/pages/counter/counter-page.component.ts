import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';

@Component({
    templateUrl: './counter-page.component.html',
    styles: `
        button {
            margin: 5px 10px;
            padding: 5px;
            width: 75px;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {

    public counter      : number = 10;
    public counterSignal: WritableSignal<number> = signal<number>(10);

    increaseBy(value: number): void {
        this.counter += value;
        this.counterSignal.update((current: number) => current + value);
    }

    resetCounter(): void {
        this.counter = 0;
        this.counterSignal.set(0);
    }

}

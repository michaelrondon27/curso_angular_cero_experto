import { Component, WritableSignal, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
    standalone: true,
    imports: [],
    templateUrl: './control-flow.component.html',
    styles: ``
})
export default class ControlFlowComponent {

    public grade      : WritableSignal<Grade> = signal<Grade>('A');
    public frameworks : WritableSignal<string[]> = signal<string[]>(['Angular', 'Qwik', 'Svelte', 'React', 'Vue']);
    public frameworks2: WritableSignal<string[]> = signal<string[]>([]);
    public showContent: WritableSignal<boolean> = signal<boolean>(false);

    toggleContent(): void {
        this.showContent.update(value => !value);
    }

}

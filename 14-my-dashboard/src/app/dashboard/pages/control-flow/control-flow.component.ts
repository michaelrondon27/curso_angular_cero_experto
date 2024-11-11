import { Component, WritableSignal, signal } from '@angular/core';

// Components
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
    standalone: true,
    imports: [
        TitleComponent
    ],
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

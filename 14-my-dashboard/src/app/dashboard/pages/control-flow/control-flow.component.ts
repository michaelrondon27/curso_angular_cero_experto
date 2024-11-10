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
    public showContent: WritableSignal<boolean> = signal<boolean>(false);

    toggleContent(): void {
        this.showContent.update(value => !value);
    }

}

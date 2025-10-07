import { Component, input, InputSignal, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-title',
    imports: [],
    templateUrl: './title.component.html'
})
export class TitleComponent implements OnChanges {

    public title: InputSignal<string> = input.required<string>();

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges');

        for (const inputName in changes) {
            const inputValues: SimpleChange = changes[inputName];

            console.log(`Previous ${ inputName } == ${ inputValues.previousValue }`);
            console.log(`Current ${ inputName } == ${ inputValues.currentValue }`);
            console.log(`Is first ${ inputName } == ${ inputValues.firstChange }`);
        }
    }

}

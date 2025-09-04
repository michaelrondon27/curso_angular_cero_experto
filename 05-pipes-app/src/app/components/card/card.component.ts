import { Component, input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html'
})
export class CardComponent {

    public title: InputSignal<string> = input.required<string>();

}

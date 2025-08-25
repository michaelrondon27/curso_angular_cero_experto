import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
    selector: 'country-search-input',
    imports: [],
    templateUrl: './search-input.component.html'
})
export class SearchInputComponent {

    public placeholder: InputSignal<string> = input<string>('Buscar');

    public value: OutputEmitterRef<string> = output<string>();

}

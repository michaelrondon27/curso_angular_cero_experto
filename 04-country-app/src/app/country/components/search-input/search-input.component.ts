import { Component, effect, EffectRef, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';

@Component({
    selector: 'country-search-input',
    imports: [],
    templateUrl: './search-input.component.html'
})
export class SearchInputComponent {

    public inputValue: WritableSignal<string> = signal<string>('');

    public debounceTime: InputSignal<number> = input<number>(300);
    public placeholder : InputSignal<string> = input<string>('Buscar');

    public value: OutputEmitterRef<string> = output<string>();

    private _debounceEffect: EffectRef = effect((onCleanup) => {
        const value: string = this.inputValue();

        const timeout = setTimeout(() => {
            this.value.emit(value);
        }, this.debounceTime());

        onCleanup(() => clearTimeout(timeout));
    });

}

import { Component, signal, WritableSignal } from '@angular/core';

// Pipes
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
    selector: 'app-custom-page',
    imports: [
        ToggleCasePipe
    ],
    templateUrl: './custom-page.component.html'
})
export default class CustomPageComponent {

    public name     : WritableSignal<string> = signal<string>('michael rondón');
    public upperCase: WritableSignal<boolean> = signal<boolean>(true);

}

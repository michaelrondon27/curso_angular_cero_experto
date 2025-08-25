import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [
        FooterComponent,
        RouterOutlet
    ],
    templateUrl: './app.component.html'
})
export class App {

    protected readonly title: WritableSignal<string> = signal<string>('country-app');

}

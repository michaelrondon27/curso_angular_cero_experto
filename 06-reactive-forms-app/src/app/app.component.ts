import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        SideMenuComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    protected readonly title: WritableSignal<string> = signal('reactive-forms-app');

}

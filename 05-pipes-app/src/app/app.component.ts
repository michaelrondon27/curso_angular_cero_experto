import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    imports: [
        NavbarComponent,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class App {
    protected readonly title = signal('pipes-app');
}

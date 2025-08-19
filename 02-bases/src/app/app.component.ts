import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    imports: [
        NavbarComponent,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    protected readonly title = signal('bases');

}

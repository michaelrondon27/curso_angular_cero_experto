import { Component, signal, WritableSignal } from '@angular/core';

// Data
import { heroes } from '../../data/heroes.data';

// Interfaces
import { Hero } from '../../interfaces/hero.interface';

// Pipes
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
    selector: 'app-custom-page',
    imports: [
        CanFlyPipe,
        HeroColorPipe,
        ToggleCasePipe
    ],
    templateUrl: './custom-page.component.html'
})
export default class CustomPageComponent {

    public heroes   : WritableSignal<Hero[]> = signal<Hero[]>(heroes);
    public name     : WritableSignal<string> = signal<string>('michael rondón');
    public upperCase: WritableSignal<boolean> = signal<boolean>(true);

}

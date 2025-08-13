import { Component, computed, Signal, signal, WritableSignal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";

@Component({
    imports: [
        UpperCasePipe
    ],
    templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {

    public age : WritableSignal<number> = signal<number>(45);
    public name: WritableSignal<string> = signal<string>('Ironman');

    public heroDescription: Signal<string> = computed<string>(() => `${ this.name() } - ${ this.age() }`);

    changeAge(): void {
        this.age.set(60);
    }

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(45);
    }

}

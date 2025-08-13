import { Component, signal, WritableSignal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {

    public age : WritableSignal<number> = signal<number>(45);
    public name: WritableSignal<string> = signal<string>('Ironman');

    changeAge(): void {
        this.age.set(60);
    }

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    getHeroDescription(): string {
        return `${ this.name() } - ${ this.age() }`
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(45);
    }

}

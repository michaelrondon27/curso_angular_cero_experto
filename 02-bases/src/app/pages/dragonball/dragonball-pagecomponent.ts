import { Component, signal, WritableSignal } from "@angular/core";

interface Character {
    id   : number;
    name : string;
    power: number;
}

@Component({
    templateUrl: './dragonball-page.component.html'
})
export class DragonballPageComponent {

    public characters: WritableSignal<Character[]> = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 8000 },
        { id: 3, name: 'Piccolo', power: 3000 },
        { id: 4, name: 'Yamcha', power: 500 }
    ]);
    public name      : WritableSignal<string> = signal<string>('Gohan');
    public power     : WritableSignal<number> = signal<number>(100);

    addCharacter(): void {
        if (!this.name() || !this.power() || this.power() <= 0) {
            return;
        }

        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        };

        this.characters.update((value: Character[]) => [
            ...value,
            newCharacter
        ]);

        this.resetFields();
    }

    resetFields(): void {
        this.name.set('');
        this.power.set(0);
    }

}

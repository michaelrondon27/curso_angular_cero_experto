import { Component, signal, WritableSignal } from "@angular/core";

interface Character {
    id   : number;
    name : string;
    power: number;
}

@Component({
    templateUrl: './dragonball-super-page.component.html'
})
export class DragonballSuperPageComponent {

    public characters: WritableSignal<Character[]> = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 8000 }
    ]);
    public name      : WritableSignal<string> = signal<string>('');
    public power     : WritableSignal<number> = signal<number>(0);

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

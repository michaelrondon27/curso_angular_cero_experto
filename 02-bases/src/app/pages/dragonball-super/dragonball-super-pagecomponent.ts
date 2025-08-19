import { Component, signal, WritableSignal } from "@angular/core";

// Components
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";

// interfaces
import { Character } from "../../interfaces/character.interface";

@Component({
    imports: [
        CharacterListComponent
    ],
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

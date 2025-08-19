import { Component, signal, WritableSignal } from "@angular/core";

// Components
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";

// interfaces
import { Character } from "../../interfaces/character.interface";

@Component({
    imports: [
        CharacterAddComponent,
        CharacterListComponent
    ],
    templateUrl: './dragonball-super-page.component.html'
})
export class DragonballSuperPageComponent {

    public characters: WritableSignal<Character[]> = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 8000 }
    ]);

    addCharacter(character: Character): void {
        this.characters.update((value: Character[]) => [
            ...value,
            character
        ]);
    }

}

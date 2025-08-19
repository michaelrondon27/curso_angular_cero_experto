import { Component, computed, inject, Signal } from "@angular/core";

// Components
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";

// interfaces
import { Character } from "../../interfaces/character.interface";

// Services
import { DragonballService } from "../../services/dragonball.service";

@Component({
    imports: [
        CharacterAddComponent,
        CharacterListComponent
    ],
    templateUrl: './dragonball-super-page.component.html'
})
export class DragonballSuperPageComponent {

    private _dragonballService: DragonballService = inject(DragonballService);

    public characters: Signal<Character[]> = computed<Character[]>(() => this._dragonballService.characters());

    addCharacter(character: Character): void {
        this._dragonballService.addCharacter(character);
    }

}

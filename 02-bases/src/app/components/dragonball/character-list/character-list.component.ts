import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

// Intefaces
import { Character } from '../../../interfaces/character.interface';

@Component({
    selector: 'dragonball-character-list',
    templateUrl: './character-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListComponent {

    public characters: InputSignal<Character[]> = input.required<Character[]>();
    public listName  : InputSignal<string> = input.required<string>();

}

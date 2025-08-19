import { ChangeDetectionStrategy, Component, signal, WritableSignal } from "@angular/core";

// Interfaces
import { Character } from "../../../interfaces/character.interface";

@Component({
    selector: 'dragonball-character-add',
    templateUrl: './character-add.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterAddComponent {

    public name : WritableSignal<string> = signal<string>('');
    public power: WritableSignal<number> = signal<number>(0);

    addCharacter(): void {
        if (!this.name() || !this.power() || this.power() <= 0) {
            return;
        }

        // const newCharacter: Character = {
        //     id: this.characters().length + 1,
        //     name: this.name(),
        //     power: this.power()
        // };

        // this.characters.update((value: Character[]) => [
        //     ...value,
        //     newCharacter
        // ]);

        this.resetFields();
    }

    resetFields(): void {
        // th/is.power.set(0);
    }

}

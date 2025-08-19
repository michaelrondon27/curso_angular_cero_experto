import { ChangeDetectionStrategy, Component, output, OutputEmitterRef, signal, WritableSignal } from "@angular/core";

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

    public newCharacter: OutputEmitterRef<Character> = output<Character>();

    addCharacter(): void {
        if (!this.name() || !this.power() || this.power() <= 0) {
            return;
        }

        const newCharacter: Character = {
            id: Math.floor(Math.random() * 1000),
            name: this.name(),
            power: this.power()
        };

        this.newCharacter.emit(newCharacter);
        this.resetFields();
    }

    resetFields(): void {
        this.name.set('');
        this.power.set(0);
    }

}

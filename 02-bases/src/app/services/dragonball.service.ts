import { Injectable, signal, WritableSignal } from '@angular/core';

// Services
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DragonballService {

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

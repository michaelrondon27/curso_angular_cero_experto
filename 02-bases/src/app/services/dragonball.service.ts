import { effect, EffectRef, Injectable, signal, WritableSignal } from '@angular/core';

// Services
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');

    return characters ? JSON.parse(characters) : [];
};

@Injectable({
    providedIn: 'root'
})
export class DragonballService {

    public characters: WritableSignal<Character[]> = signal<Character[]>(loadFromLocalStorage());

    private _saveToLocalStorage: EffectRef = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });

    addCharacter(character: Character): void {
        this.characters.update((value: Character[]) => [
            ...value,
            character
        ]);
    }

}

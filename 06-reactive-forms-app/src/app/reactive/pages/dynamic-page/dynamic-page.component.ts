import { Component, inject, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Utils
import { FormUtils } from '../../../utils/form-utils';

@Component({
    selector: 'app-dynamic-page',
    imports: [
        JsonPipe,
        ReactiveFormsModule
    ],
    templateUrl: './dynamic-page.component.html'
})
export default class DynamicPageComponent {

    private _formBuilder: FormBuilder = inject(FormBuilder);

    public formUtils  : WritableSignal<typeof FormUtils> = signal<typeof FormUtils>(FormUtils);
    public myForm     : WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        favoriteGames: this._formBuilder.array(
            [
                ['Metal Gear', [Validators.required]],
                ['Death Stranding', [Validators.required]]
            ],
            [Validators.minLength(3)]
        ),
        name: ['', [Validators.minLength(3), Validators.required]]
    }));
    public newFavorite: WritableSignal<FormControl> = signal<FormControl>(new FormControl('', [Validators.required]));

    get favoriteGames(): FormArray {
        return this.myForm().get('favoriteGames') as FormArray;
    }

    onAddToFavorites(): void {
        if (this.newFavorite().invalid ) {
            return;
        }

        const newGame: string = this.newFavorite().value;

        this.favoriteGames.push(this._formBuilder.control(newGame, [Validators.required]));

        this.newFavorite().reset();
    }

    onDeleteFavorite(index: number): void {
        this.favoriteGames.removeAt(index);
    }

    onSubmit(): void {
        this.myForm().markAllAsTouched();
    }

}

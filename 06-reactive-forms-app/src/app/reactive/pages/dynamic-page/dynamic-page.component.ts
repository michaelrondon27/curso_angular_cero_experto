import { Component, inject, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

    public myForm: WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        favoriteGames: this._formBuilder.array(
            [
                ['Metal Gear', [Validators.required]],
                ['Death Stranding', [Validators.required]]
            ],
            [Validators.minLength(3)]
        ),
        name: ['', [Validators.minLength(3), Validators.required]]
    }));

    get favoriteGames(): FormArray {
        return this.myForm().get('favoriteGames') as FormArray;
    }

}

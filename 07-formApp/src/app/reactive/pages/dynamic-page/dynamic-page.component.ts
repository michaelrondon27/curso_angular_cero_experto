import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dynamic-page',
    templateUrl: './dynamic-page.component.html'
})
export class DynamicPageComponent {

    public myForm: FormGroup = this.formBuilder.group({
        favoriteGames: this.formBuilder.array([
            ['Death Stranding', Validators.required],
            ['Metal Gear', Validators.required]
        ]),
        name: ['', [Validators.required, Validators.minLength(3)]]
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

    get favoriteGames(): FormArray {
        return this.myForm.get('favoriteGames') as FormArray;
    }

    onSubmit(): void {
        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            return;
        }

        this.myForm.reset();
    }

}

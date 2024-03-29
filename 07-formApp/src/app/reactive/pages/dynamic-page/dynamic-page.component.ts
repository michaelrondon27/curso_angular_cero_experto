import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    public newFavorite: FormControl = new FormControl('', Validators.required);

    constructor(
        private formBuilder: FormBuilder
    ) { }

    get favoriteGames(): FormArray {
        return this.myForm.get('favoriteGames') as FormArray;
    }

    getFieldError(field: string): string | null {
        if (!this.myForm.controls[field]) return null;

        const errors = this.myForm.controls[field].errors || {};

        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'Este campo es requerido';

                    case 'minlength':
                        return `Mínimo ${ errors['minlength'].requiredLength } caracteres.`;
            }
        }

        return null;
    }

    isValidField(field: string): boolean | null {
        return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
    }

    isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
        return formArray.controls[index].errors && formArray.controls[index].touched;
    }

    onAddToFavorites(): void {
        if (this.newFavorite.invalid) return;

        this.favoriteGames.push(this.formBuilder.control(this.newFavorite.value, Validators.required));

        this.newFavorite.reset();
    }

    onDeleteFavorite(index: number): void {
        this.favoriteGames.removeAt(index);
    }

    onSubmit(): void {
        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            return;
        }

        (this.myForm.controls['favoriteGames'] as FormArray) = this.formBuilder.array([]);
        this.myForm.reset();
    }

}

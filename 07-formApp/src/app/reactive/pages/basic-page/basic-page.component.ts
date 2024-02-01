import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-basic-page',
    templateUrl: './basic-page.component.html'
})
export class BasicPageComponent {

    public myForm: FormGroup = this.formBuilder.group({
        inStorage: [0, [Validators.required, Validators.min(0)]],
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: [0, [Validators.required, Validators.min(0)]]
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

    onSave(): void {
        if (this.myForm.invalid) return;
    }

}

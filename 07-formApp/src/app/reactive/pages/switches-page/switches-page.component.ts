import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-switches-page',
    templateUrl: './switches-page.component.html'
})
export class SwitchesPageComponent {

    public myForm: FormGroup = this.formBuilder.group({
        gender: ['M', Validators.required],
        termsAndConditions: [false, Validators.requiredTrue],
        wantNotifications: [true, Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

    onSave(): void {
        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            return;
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-switches-page',
    templateUrl: './switches-page.component.html'
})
export class SwitchesPageComponent implements OnInit {

    public myForm: FormGroup = this.formBuilder.group({
        gender: ['M', Validators.required],
        termsAndConditions: [false, Validators.requiredTrue],
        wantNotifications: [true, Validators.required]
    });
    public person = {
        gender: 'F',
        wantNotifications: false
    };

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.myForm.reset(this.person);
    }

    isValidField(field: string): boolean | null {
        return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
    }

    onSave(): void {
        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            return;
        }

        const { termsAndConditions, ...newPerson } = this.myForm.value;

        this.person = newPerson;
    }

}

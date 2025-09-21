import { Component, inject, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Utils
import { FormUtils } from '../../../utils/form-utils';

@Component({
    selector: 'app-switches-page',
    imports: [
        JsonPipe,
        ReactiveFormsModule
    ],
    templateUrl: './switches-page.component.html'
})
export default class SwitchesPageComponent {

    private _formBuilder: FormBuilder = inject(FormBuilder);

    public formUtils: WritableSignal<typeof FormUtils> = signal<typeof FormUtils>(FormUtils);
    public myForm   : WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        gender: ['M', [Validators.required]],
        termAndConditions: [false, [Validators.requiredTrue]],
        wantNotifications: [true]
    }));

    onSubmit(): void {
        this.myForm().markAllAsTouched();

        console.log(this.myForm().value)
    }

}

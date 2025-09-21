import { Component, inject, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Utils
import { FormUtils } from '../../../utils/form-utils';

@Component({
    selector: 'app-basic-page',
    imports: [
        JsonPipe,
        ReactiveFormsModule
    ],
    templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {

    private _formBuilder: FormBuilder = inject(FormBuilder);

    public formUtils: WritableSignal<typeof FormUtils> = signal<typeof FormUtils>(FormUtils);
    public myForm   : WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        inStorage: [0, [Validators.min(0), Validators.required]],
        name: ['', [Validators.minLength(3), Validators.required]],
        price: [0, [Validators.min(10), Validators.required]]
    }));

    onSave(): void {
        if (this.myForm().invalid) {
            this.myForm().markAllAsTouched();
            return;
        }

        console.log(this.myForm().value);

        this.myForm().reset({
            inStorage: 0,
            price: 0
        });
    }

}

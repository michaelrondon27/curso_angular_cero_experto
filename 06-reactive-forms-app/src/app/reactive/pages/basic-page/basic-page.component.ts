import { Component, inject, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

    public myForm: WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        inStorage: [0],
        name: [''],
        price: [0]
    }));

}

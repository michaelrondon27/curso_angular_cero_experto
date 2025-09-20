import { Component, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-basic-page',
    imports: [
        JsonPipe,
        ReactiveFormsModule
    ],
    templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {

    public myForm: WritableSignal<FormGroup> = signal<FormGroup>(new FormGroup({
        inStorage: new FormControl(0),
        name: new FormControl(''),
        price: new FormControl(0)
    }))

}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-basic-page',
    templateUrl: './basic-page.component.html'
})
export class BasicPageComponent {

    public myForm: FormGroup = this.formBuilder.group({
        inStorage: [0],
        price: [0],
        name: ['']
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

    onSave(): void {

    }

}

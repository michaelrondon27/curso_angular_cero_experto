import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-selector-page',
    templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent {

    public myForm: FormGroup = this.formBuilder.group({
        borders: ['', Validators.required],
        country: ['', Validators.required],
        region:  ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

}

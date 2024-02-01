import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
    inStorage: 6,
    name: 'RTX 5090',
    price: 2500
};

@Component({
    selector: 'app-basic-page',
    templateUrl: './basic-page.component.html'
})
export class BasicPageComponent implements OnInit {

    public myForm: FormGroup = this.formBuilder.group({
        inStorage: [0, [Validators.required, Validators.min(0)]],
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: [0, [Validators.required, Validators.min(0)]]
    });

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.myForm.reset(rtx5090);
    }

    onSave(): void {
        if (this.myForm.invalid) return;

        this.myForm.reset({
            inStorage: 0,
            price: 0
        });
    }

}

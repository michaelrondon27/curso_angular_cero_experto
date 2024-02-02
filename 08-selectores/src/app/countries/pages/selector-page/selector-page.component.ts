import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Region } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

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
        private formBuilder: FormBuilder,
        private countriesService: CountriesService
    ) { }

    get regions(): Region[] {
        return this.countriesService.regions;
    }

}

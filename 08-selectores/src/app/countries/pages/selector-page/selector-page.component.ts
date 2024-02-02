import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';

import { Region } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'app-selector-page',
    templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit {

    public myForm: FormGroup = this.formBuilder.group({
        borders: ['', Validators.required],
        country: ['', Validators.required],
        region:  ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private countriesService: CountriesService
    ) { }

    ngOnInit(): void {
        this.onRegionChanged();
    }

    get regions(): Region[] {
        return this.countriesService.regions;
    }

    onRegionChanged(): void {
        this.myForm.get('region')!.valueChanges
            .pipe(
                switchMap(region => this.countriesService.getCountriesByRegion(region))
            )
            .subscribe(countries => {

            });
    }

}

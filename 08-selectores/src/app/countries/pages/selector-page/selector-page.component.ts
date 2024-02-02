import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';

import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'app-selector-page',
    templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit {

    public borders: SmallCountry[] = [];
    public countriesByRegion: SmallCountry[] = [];
    public myForm: FormGroup = this.formBuilder.group({
        border:  ['', Validators.required],
        country: ['', Validators.required],
        region:  ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private countriesService: CountriesService
    ) { }

    ngOnInit(): void {
        this.onCountryChanged();
        this.onRegionChanged();
    }

    get regions(): Region[] {
        return this.countriesService.regions;
    }

    onCountryChanged(): void {
        this.myForm.get('country')!.valueChanges
            .pipe(
                tap(() => this.myForm.get('border')!.setValue('')),
                filter((value: string) => value.length > 0),
                switchMap(alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode)),
                switchMap(country => this.countriesService.getCountryBordersByCodes(country.borders))
            )
            .subscribe(countries => this.borders = countries);
    }

    onRegionChanged(): void {
        this.myForm.get('region')!.valueChanges
            .pipe(
                tap(() => this.myForm.get('country')!.setValue('')),
                tap(() => this.borders = []),
                switchMap(region => this.countriesService.getCountriesByRegion(region))
            )
            .subscribe(countries => this.countriesByRegion = countries);
    }

}

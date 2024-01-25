import { Component, OnDestroy, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-by-country-page',
    templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent implements OnInit, OnDestroy {

    public countries: Country[] = [];
    public isLoading: boolean = false;
    public initialValue: string = '';
    private _destroy$: Subject<Country[]> = new Subject();

    constructor(
        private countriesService: CountriesService
    ) { }

    ngOnInit(): void {
        this.countries = this.countriesService.cacheStore.byCountries.countries;
        this.initialValue = this.countriesService.cacheStore.byCountries.term;
    }

    searchByCountry(term: string): void {
        this.isLoading = true;

        this.countriesService.searchCountry(term)

            .subscribe( countries => {
                this.countries = countries;
                this.isLoading = false;
            });
    }

    ngOnDestroy(): void {
        this._destroy$.complete();
    }

}

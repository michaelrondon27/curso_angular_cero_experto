import { Component, OnDestroy } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-by-country-page',
    templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent implements OnDestroy {

    public countries: Country[] = [];
    public isLoading: boolean = false;
    private _destroy$: Subject<Country[]> = new Subject();

    constructor(
        private countriesService: CountriesService
    ) { }

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

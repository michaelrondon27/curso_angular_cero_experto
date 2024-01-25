import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'app-by-capital-page',
    templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

    public countries: Country[] = [];
    public isLoading: boolean = false;

    constructor(
        private countriesService: CountriesService
    ) { }

    searchByCapital(term: string): void {
        this.isLoading = true;

        this.countriesService.searchCapital(term)
            .subscribe( countries => {
                this.countries = countries;
                this.isLoading = false;
            });
    }

}

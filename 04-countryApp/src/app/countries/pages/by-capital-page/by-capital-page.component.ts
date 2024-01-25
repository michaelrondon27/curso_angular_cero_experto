import { Component, OnDestroy } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-by-capital-page',
    templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnDestroy {

    public countries: Country[] = [];
    public isLoading: boolean = false;
    private _destroy$: Subject<Country[]> = new Subject();

    constructor(
        private countriesService: CountriesService
    ) { }

    searchByCapital(term: string): void {
        this.isLoading = true;

        this.countriesService.searchCapital(term)
            .pipe(
                takeUntil(this._destroy$)
            )
            .subscribe( countries => {
                this.countries = countries;
                this.isLoading = false;
            });
    }

    ngOnDestroy(): void {
        this._destroy$.complete();
    }

}

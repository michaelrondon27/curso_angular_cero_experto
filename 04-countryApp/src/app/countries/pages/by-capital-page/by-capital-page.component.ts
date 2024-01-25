import { Component, OnDestroy, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-by-capital-page',
    templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit, OnDestroy {

    public countries: Country[] = [];
    public isLoading: boolean = false;
    public initialValue: string = '';
    private _destroy$: Subject<Country[]> = new Subject();

    constructor(
        private countriesService: CountriesService
    ) { }

    ngOnInit(): void {
        console.log(this.countriesService.cacheStore);
        this.countries = this.countriesService.cacheStore.byCapital.countries;
        this.initialValue = this.countriesService.cacheStore.byCapital.term;
    }

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

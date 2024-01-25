import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent implements OnDestroy {

    public countries: Country[] = [];
    public isLoading: boolean = false;
    public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    public seletedRegion?: string;
    private _destroy$: Subject<Country[]> = new Subject();

    constructor(
        private countriesService: CountriesService
    ) { }

    searchByRegion(term: Region): void {
        this.isLoading = true;
        this.seletedRegion = term;

        this.countriesService.searchRegion(term)
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

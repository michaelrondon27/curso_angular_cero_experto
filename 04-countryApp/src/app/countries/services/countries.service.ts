import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { CacheStore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';
    public cacheStore: CacheStore = {
        byCapital  : { term: '', countries: [] },
        byCountries: { term: '', countries: [] },
        byRegion   : { region: '', countries: [] },
    }

    constructor(
        private httpClient: HttpClient
    ) {
        this.loadFromLocalStorage();
    }

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

    private loadFromLocalStorage(): void {
        if (!localStorage.getItem('cacheStore')) return;

        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }

    searchCapital(term: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/capital/${ term }`;
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byCapital = { term, countries }),
                tap(() => this.saveToLocalStorage())
            );
    }

    searchCountry(term: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/name/${ term }`;
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byCountries = { term, countries }),
                tap(() => this.saveToLocalStorage())
            );
    }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        const url: string = `${ this.apiUrl }/alpha/${ code }`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(() => of(null))
            );
    }

    searchRegion(region: Region): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/region/${ region }`;
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byRegion = { region, countries }),
                tap(() => this.saveToLocalStorage())
            );
    }

}

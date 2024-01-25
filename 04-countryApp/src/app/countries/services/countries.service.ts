import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(
        private httpClient: HttpClient
    ) { }

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(() => of([])),
                delay(2000)
            );;
    }

    searchCapital(term: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/capital/${ term }`;
        return this.getCountriesRequest(url);
    }

    searchCountry(term: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/name/${ term }`;
        return this.getCountriesRequest(url);
    }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        const url: string = `${ this.apiUrl }/alpha/${ code }`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(() => of(null))
            );
    }

    searchRegion(term: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/region/${ term }`;
        return this.getCountriesRequest(url);
    }

}

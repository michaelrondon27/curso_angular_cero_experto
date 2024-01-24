import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(
        private httpClient: HttpClient
    ) { }

    searchCapital(term: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/capital/${ term }`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

    searchCountry(term: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/name/${ term }`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

    searchCountryByAlphaCode(code: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/alpha/${ code }`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

    searchRegion(term: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/region/${ term }`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

}

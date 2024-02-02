import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    private _regions: Region[] = [
        Region.Africa,
        Region.Americas,
        Region.Asia,
        Region.Europe,
        Region.Oceania
    ];

    private baseUrl: string = 'https://restcountries.com/v3.1';

    constructor(
        private httpClient: HttpClient
    ) { }

    get regions(): Region[] {
        return [...this._regions];
    }

    getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
        if (!region) return of([]);

        const url: string = `${ this.baseUrl }/region/${ region }?fields=cca3,name,borders`;

        return this.httpClient.get<Country[]>(url)
            .pipe(
                map(countries => countries.map(country => ({
                    borders: country.borders ?? [],
                    cca3: country.cca3,
                    name: country.name.common
                })))
            );
    }

    getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
        const url = `${ this.baseUrl }/alpha/${ alphaCode }?fields=cca3,name,borders`;

        return this.httpClient.get<Country>(url)
            .pipe(
                map(country => ({
                    borders: country.borders ?? [],
                    cca3: country.cca3,
                    name: country.name.common
                }))
            );
    }

}

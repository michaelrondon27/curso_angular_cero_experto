import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Interfaces
import { Country } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private _httpClient: HttpClient = inject(HttpClient);

    private _baseUrl: WritableSignal<string> = signal<string>('https://restcountries.com/v3.1');
    private _regions: WritableSignal<string[]> = signal<string[]>([
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania'
    ]);

    get regions(): string[] {
        return [...this._regions()];
    }

    getCountriesByRegion(region: string): Observable<Country[]> {
        if (!region) {
            return of([]);
        }

        return this._httpClient.get<Country[]>(`${ this._baseUrl() }/region/${ region }?fields=borders,cca3,name`);
    }

    getCountryBordersByCode(borders: string) {}

    getCountryByAlphaCode(alphaCode: string): Observable<Country> {
        return this._httpClient.get<Country>(`${ this._baseUrl() }/alpha/${ alphaCode }?fields=borders,cca3,name`);
    }

}

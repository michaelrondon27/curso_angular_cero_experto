import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';

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

    getCountryByAlphaCode(alphaCode: string): Observable<Country> {
        return this._httpClient.get<Country>(`${ this._baseUrl() }/alpha/${ alphaCode }?fields=borders,cca3,name`);
    }

    getCountryNamesByCodes(codes: string[]): Observable<Country[]> {
        if (!codes || !codes.length) {
            return of([]);
        }

        const countriesRequest: Observable<Country>[] = [];

        codes.forEach((code: string) => countriesRequest.push(this.getCountryByAlphaCode(code)));

        return combineLatest(countriesRequest);
    }

}

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

// Interfaces
import { Country } from '../interfaces/country.interface';
import { RestCountry } from '../interfaces/rest-countries.interface';

// Mappers
import { CountryMapper } from '../mappers/country.mapper';

// Types
import { Region } from '../types/region.type';

const API_URL: string = 'https://restcountries.com/v3.1';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private _httpClient: HttpClient = inject(HttpClient);

    private _queryCacheCapital = new Map<string, Country[]>();
    private _queryCacheCountry = new Map<string, Country[]>();
    private _queryCacheRegion  = new Map<Region, Country[]>();

    searchByAlphaCode(code: string): Observable<Country | undefined> {
        return this._httpClient.get<RestCountry[]>(`${ API_URL }/alpha/${ code }`)
            .pipe(
                map((respCountries: RestCountry[]) => CountryMapper.mapRestCountryArrayToCountryArray(respCountries)),
                map((countries: Country[]) => countries.at(0)),
                catchError(error => {
                    return throwError(() => new Error(`No se pudo obtener países con ese código ${ code }`))
                })
            );
    }

    searchByCapital(query: string): Observable<Country[]> {
        query = query.toLowerCase();

        if (this._queryCacheCapital.has(query)) {
            return of(this._queryCacheCapital.get(query) ?? []);
        }

        return this._httpClient.get<RestCountry[]>(`${ API_URL }/capital/${ query }`)
            .pipe(
                map((respCountries: RestCountry[]) => CountryMapper.mapRestCountryArrayToCountryArray(respCountries)),
                tap((countries: Country[]) => this._queryCacheCapital.set(query, countries)),
                catchError(error => {
                    return throwError(() => new Error(`No se pudo obtener países con ese query ${ query }`))
                })
            );
    }

    searchByCountry(query: string): Observable<Country[]> {
        query = query.toLowerCase();

        if (this._queryCacheCountry.has(query)) {
            return of(this._queryCacheCountry.get(query) ?? []);
        }

        return this._httpClient.get<RestCountry[]>(`${ API_URL }/name/${ query }`)
            .pipe(
                map((respCountries: RestCountry[]) => CountryMapper.mapRestCountryArrayToCountryArray(respCountries)),
                tap((countries: Country[]) => this._queryCacheCountry.set(query, countries)),
                catchError(error => {
                    return throwError(() => new Error(`No se pudo obtener países con ese query ${ query }`))
                })
            );
    }

    searchByRegion(region: Region): Observable<Country[]> {
        if (this._queryCacheRegion.has(region)) {
            return of(this._queryCacheRegion.get(region) ?? []);
        }

        return this._httpClient.get<RestCountry[]>(`${ API_URL }/region/${ region }`)
            .pipe(
                map((respCountries: RestCountry[]) => CountryMapper.mapRestCountryArrayToCountryArray(respCountries)),
                tap((countries: Country[]) => this._queryCacheRegion.set(region, countries)),
                catchError(error => {
                    return throwError(() => new Error(`No se pudo obtener países con esa región ${ region }`))
                })
            );
    }

}

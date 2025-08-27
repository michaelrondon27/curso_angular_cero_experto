import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';

// Interfaces
import { Country } from '../interfaces/country.interface';
import { RestCountry } from '../interfaces/rest-countries.interface';

// Mappers
import { CountryMapper } from '../mappers/country.mapper';

const API_URL: string = 'https://restcountries.com/v3.1';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private _hhtpClient: HttpClient = inject(HttpClient);

    searchByAlphaCode(code: string): Observable<Country | undefined> {
        return this._hhtpClient.get<RestCountry[]>(`${ API_URL }/alpha/${ code }`)
            .pipe(
                map((respCountries: RestCountry[]) => CountryMapper.mapRestCountryArrayToCountryArray(respCountries)),
                map((countries: Country[]) => countries.at(0)),
                catchError(error => {
                    return throwError(() => new Error(`No se pudo obtener países con ese código ${ code }`))
                })
            );
    }

    searchByCapital(query: string): Observable<Country[]> {
        return this._hhtpClient.get<RestCountry[]>(`${ API_URL }/capital/${ query.toLowerCase() }`)
            .pipe(
                map((respCountries: RestCountry[]) => CountryMapper.mapRestCountryArrayToCountryArray(respCountries)),
                catchError(error => {
                    return throwError(() => new Error(`No se pudo obtener países con ese query ${ query }`))
                })
            );
    }

    searchByCountry(query: string): Observable<Country[]> {
        return this._hhtpClient.get<RestCountry[]>(`${ API_URL }/name/${ query.toLowerCase() }`)
            .pipe(
                map((respCountries: RestCountry[]) => CountryMapper.mapRestCountryArrayToCountryArray(respCountries)),
                catchError(error => {
                    return throwError(() => new Error(`No se pudo obtener países con ese query ${ query }`))
                })
            );
    }

}

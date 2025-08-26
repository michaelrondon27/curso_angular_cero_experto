import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

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

    searchByCapital(query: string): Observable<Country[]> {
        return this._hhtpClient.get<RestCountry[]>(`${ API_URL }/capital/${ query.toLowerCase() }`)
            .pipe(
                map((respCountries: RestCountry[]) => CountryMapper.mapRestCountryArrayToCountryArray(respCountries))
            );
    }

}

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
import { RestCountry } from '../interfaces/rest-countries.interface';

const API_URL: string = 'https://restcountries.com/v3.1';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private _hhtpClient: HttpClient = inject(HttpClient);

    searchByCapital(query: string): Observable<RestCountry[]> {
        return this._hhtpClient.get<RestCountry[]>(`${ API_URL }/capital/${ query.toLowerCase() }`);
    }

}

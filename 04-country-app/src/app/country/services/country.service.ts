import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL: string = 'https://restcountries.com/v3.1';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private _hhtpClient: HttpClient = inject(HttpClient);

    searchByCapital(query: string) {
        return this._hhtpClient.get(`${ API_URL }/capital/${ query.toLowerCase() }`);
    }

}

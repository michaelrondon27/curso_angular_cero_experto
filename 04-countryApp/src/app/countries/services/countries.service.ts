import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class ServiceNameService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(
        private httpClient: HttpClient
    ) { }

    searchCapital(term: string): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/capital/${ term }`;
        return this.httpClient.get<Country[]>(url);
    }

}

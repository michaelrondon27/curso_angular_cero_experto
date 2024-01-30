import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { environments } from '../../../environments/environment';

import { Hero } from '../interfaces/hero.interface';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {

    private baseUrl: string = environments.baseUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    getHeroById(id: string): Observable<Hero | undefined> {
        return this.httpClient.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
            .pipe(
                catchError(error => of(undefined))
            );
    }

    getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(`${ this.baseUrl }/heroes`);
    }

    getSuggestions(query: string): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }&_limit=6`);
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

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

    addHero(hero: Hero): Observable<Hero> {
        return this.httpClient.post<Hero>(`${ this.baseUrl }/heroes`, hero);
    }

    deleteHeroById(id: string): Observable<boolean> {
        return this.httpClient.delete(`${ this.baseUrl }/heroes/${ id }`)
            .pipe(
                catchError(err => of(false)),
                map(resp => true)
            );
    }

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

    updateHero(hero: Hero): Observable<Hero> {
        if (!hero.id) throw Error('Hero id is required');

        return this.httpClient.patch<Hero>(`${ this.baseUrl }/heroes/${ hero.id }`, hero);
    }

}

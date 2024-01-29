import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

}

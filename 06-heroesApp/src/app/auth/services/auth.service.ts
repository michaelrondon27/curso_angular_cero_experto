import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { environments } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl: string = environments.baseUrl;
    private user?: User;

    constructor(
        private httpClient: HttpClient
    ) { }

    get currentUser(): User | undefined {
        if (!this.user) return undefined;

        return structuredClone(this.user);
    }

    checkAuthentication(): Observable<boolean> {
        if (!localStorage.getItem('token')) return of(false);

        const token: string = localStorage.getItem('token')!;

        return this.httpClient.get<User>(`${ this.baseUrl }/users/1`)
            .pipe(
                tap(user => this.user = user),
                map(user => !!user),
                catchError(err => of(false))
            );
    }

    login(email: string, password: string): Observable<User> {
        return this.httpClient.get<User>(`${ this.baseUrl }/users/1`)
            .pipe(
                tap(user => this.user = user),
                tap(user => localStorage.setItem('token', 'abfasbe2ebiurb9wdi'))
            );
    }

    logout(): void {
        this.user = undefined;
        localStorage.clear();
    }

}

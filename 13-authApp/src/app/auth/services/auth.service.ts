import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Environments
import { environment } from '@env/environments';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private httpClient: HttpClient = inject(HttpClient);

    private readonly baseUrl: string = environment.baseUrl;

    private _authStatus : WritableSignal<AuthStatus> = signal<AuthStatus>();
    private _currentUser: WritableSignal<User> = signal<User>(null);

    constructor() { }

    login(email: string, password: string): Observable<boolean> {
        return of(true);
    }

}

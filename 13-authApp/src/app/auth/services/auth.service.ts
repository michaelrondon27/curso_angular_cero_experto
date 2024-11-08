import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Enums
import { AuthStatus } from '../enums';

// Environments
import { environment } from '@env/environments';

// Interfaces
import { User } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private httpClient: HttpClient = inject(HttpClient);

    private readonly baseUrl: string = environment.baseUrl;

    private _authStatus : WritableSignal<AuthStatus> = signal<AuthStatus>(AuthStatus.checking);
    private _currentUser: WritableSignal<User | null> = signal<User | null>(null);

    constructor() { }

    login(email: string, password: string): Observable<boolean> {
        return of(true);
    }

}

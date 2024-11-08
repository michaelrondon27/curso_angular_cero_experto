import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

// Enums
import { AuthStatus } from '../enums';

// Environments
import { environment } from '@env/environments';

// Interfaces
import { LoginResponse, User } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private httpClient: HttpClient = inject(HttpClient);

    private readonly baseUrl: string = environment.baseUrl;

    private _authStatus : WritableSignal<AuthStatus> = signal<AuthStatus>(AuthStatus.checking);
    private _currentUser: WritableSignal<User | null> = signal<User | null>(null);

    public authStatus : Signal<WritableSignal<AuthStatus>> = computed(() => this._authStatus);
    public currentUser: Signal<WritableSignal<User | null>> = computed(() => this._currentUser);

    constructor() { }

    login(email: string, password: string): Observable<boolean> {
        const url: string = `${ this.baseUrl }/auth/login`;
        const body = { email, password };

        return this.httpClient.post<LoginResponse>(url, body)
            .pipe(
                tap(({ token, user }) => {
                    this._authStatus.set(AuthStatus.authenticated);
                    this._currentUser.set(user);

                    localStorage.setItem('token', token);
                }),
                map(() => true),
                catchError((err: HttpErrorResponse) => throwError(() => err.error.message))
            );
    }

}

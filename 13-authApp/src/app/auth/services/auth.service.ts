import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

// Enums
import { AuthStatus } from '../enums';

// Environments
import { environment } from '@env/environments';

// Interfaces
import { CheckTokenResponse, LoginResponse, User } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private httpClient: HttpClient = inject(HttpClient);

    private readonly baseUrl: string = environment.baseUrl;

    private _authStatus : WritableSignal<AuthStatus> = signal<AuthStatus>(AuthStatus.checking);
    private _currentUser: WritableSignal<User | null> = signal<User | null>(null);

    public authStatus : Signal<AuthStatus> = computed(() => this._authStatus());
    public currentUser: Signal<User | null> = computed(() => this._currentUser());

    constructor() { }

    checkAuthStatus(): Observable<boolean> {
        const url: string = `${ this.baseUrl }/Auth/check-token`;
        const token: string | null = localStorage.getItem('token');

        if (!token) {
            return of(false);
        }

        const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ token }`);

        return this.httpClient.get<CheckTokenResponse>(url, { headers }).pipe(
            map(({ token, user }) => this.setAuthentication(token, user)),
            catchError(() => {
                this._authStatus.set(AuthStatus.notAuthenticated);

                return of(false);
            })
        );
    }

    login(email: string, password: string): Observable<boolean> {
        const url: string = `${ this.baseUrl }/auth/login`;
        const body = { email, password };

        return this.httpClient.post<LoginResponse>(url, body)
            .pipe(
                map(({ token, user }) => this.setAuthentication(token, user)),
                catchError((err: HttpErrorResponse) => throwError(() => err.error.message))
            );
    }

    private setAuthentication(token: string, user: User): boolean {
        this._authStatus.set(AuthStatus.authenticated);
        this._currentUser.set(user);

        localStorage.setItem('token', token);

        return true;
    }

}

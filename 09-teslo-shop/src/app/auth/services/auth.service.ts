import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

// Environments
import { environment } from 'src/environments/environment';

// Interfaces
import { AuthResponse } from '@auth/interfaces/auth-response.interface';
import { User } from '@auth/interfaces/user.interface';

type AuthStatus = 'authenticated' | 'checking' | 'not-authenticated';

const baseUrl: string = environment.baseUrl;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _httpClient: HttpClient = inject(HttpClient);

    private _authStatus: WritableSignal<AuthStatus> = signal<AuthStatus>('checking');
    private _token     : WritableSignal<string | null> = signal<string | null>(null);
    private _user      : WritableSignal<User | null> = signal<User | null>(null);

    public authStatus: Signal<AuthStatus> = computed<AuthStatus>(() => {
        if (this._authStatus() === 'checking') {
            return 'checking';
        }

        if (this._user()) {
            return 'authenticated';
        }

        return 'not-authenticated';
    });
    public token     : Signal<string | null> = computed<string | null>(() => this._token());
    public user      : Signal<User | null> = computed<User | null>(() => this._user());

    login(email: string, password: string): Observable<boolean> {
        return this._httpClient.post<AuthResponse>(`${ baseUrl }/auth/login`, {
            email,
            password
        }).pipe(
            tap((resp: AuthResponse) => {
                this._authStatus.set('authenticated');
                this._token.set(resp.token);
                this._user.set(resp.user);

                localStorage.setItem('token', resp.token);
            }),
            map(() => true),
            catchError((error: any) => {
                this._authStatus.set('not-authenticated');
                this._token.set(null);
                this._user.set(null);

                return of(false);
            })
        );
    }

}

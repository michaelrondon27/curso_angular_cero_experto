import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
import { User } from '@auth/interfaces/user.interface';

type AuthStatus = 'authenticated' | 'checking' | 'not-authenticated';

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

}

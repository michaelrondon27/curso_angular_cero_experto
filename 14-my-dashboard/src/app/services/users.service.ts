import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';

// Interfaces
import type { User, UserResponse, UsersResponse } from '@interfaces/users.interface';

interface State {
    loading: boolean;
    users  : User[];
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private httpClient: HttpClient = inject(HttpClient);

    #state: WritableSignal<State> = signal<State>({ loading: true, users: [] });

    public loading: Signal<boolean> = computed<boolean>(() => this.#state().loading);
    public users  : Signal<User[]> = computed<User[]>(() => this.#state().users);

    constructor() {
        this.httpClient.get<UsersResponse>('https://reqres.in/api/users')
            .pipe(delay(1500))
            .subscribe(res => {
                this.#state.set({
                    loading: false,
                    users: res.data
                });
            });
    }

    getUserById(id: string): Observable<User> {
        return this.httpClient.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
            .pipe(
                delay(1500),
                map(resp => resp.data)
            );
    }

}

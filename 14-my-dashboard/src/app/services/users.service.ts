import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

// Interfaces
import { User, Users } from '@interfaces/users.interface';

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
        this.httpClient.get<Users>('https://reqres.in/api/users')
            .pipe(delay(1500))
            .subscribe(res => {
                this.#state.set({
                    loading: false,
                    users: res.data
                });
            });
    }

}

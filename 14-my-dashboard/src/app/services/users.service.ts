import { Injectable, WritableSignal, signal } from '@angular/core';

// Interfaces
import { User } from '@interfaces/users.interface';

interface State {
    loading: boolean;
    users  : User[];
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    #state: WritableSignal<State> = signal<State>({ loading: true, users: [] });

    constructor() { }

}

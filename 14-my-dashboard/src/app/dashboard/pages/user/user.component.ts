import { Component, Signal, WritableSignal, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

// Components
import { TitleComponent } from '@shared/title/title.component';

// Interfaces
import { User } from '@interfaces/users.interface';

// Services
import { UsersService } from '@services/users.service';

@Component({
    standalone: true,
    imports: [
        TitleComponent
    ],
    template:`
        <app-title title="User" />

        @if (user()) {
            <section>
                <img
                    [alt]="user()!.first_name"
                    [srcset]="user()!.avatar"
                />

                <div>
                    <h3>{{ user()!.first_name }} {{ user()!.last_name }}</h3>

                    <p>{{ user()!.email }}</p>
                </div>
            </section>
        } @else {
            <p>Cargando información</p>
        }
    `,
    styles: ``
})
export default class UserComponent {

    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private usersService  : UsersService = inject(UsersService);

    // public user: WritableSignal<User | undefined> = signal<User | undefined>(undefined);
    public user: Signal<User | undefined> = toSignal(
        this.activatedRoute.params.pipe(
            switchMap(({ id }) => this.usersService.getUserById(id))
        )
    );

    constructor() {

    }

}

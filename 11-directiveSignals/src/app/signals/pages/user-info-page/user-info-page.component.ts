import { Component, OnInit, WritableSignal, computed, inject, signal } from '@angular/core';

// Interfaces
import { User } from '../../interfaces/user-request.interface';

// Services
import { UsersService } from '../../services/users.service';

@Component({
    templateUrl: './user-info-page.component.html',
    styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

    private usersService: UsersService = inject(UsersService);

    public currentUser = signal<User | undefined>(undefined);
    public userId = signal<number>(1);
    public userWasFound = signal<boolean>(true);

    public fullName = computed<string>(() => {
        if (!this.currentUser()) {
            return 'Usuario no encontrado';
        }

        return `${ this.currentUser()?.first_name } ${ this.currentUser()?.last_name }`;
    });

    ngOnInit(): void {
        this.loadUser(this.userId());
    }

    loadUser(id: number): void {
        if (id <= 0) {
            return;
        }

        this.userId.set(id);
        this.currentUser.set(undefined);

        this.usersService.getUserById(id)
            .subscribe({
                next: (user) => {
                    this.currentUser.set(user);
                    this.userWasFound.set(true);
                },
                error: () => {
                    this.userWasFound.set(false);
                    this.currentUser.set(undefined);
                }
            });
    }

}

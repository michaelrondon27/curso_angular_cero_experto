import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';

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
    public userId: WritableSignal<number> = signal(1);
    public userWasFound: WritableSignal<boolean> = signal(true);

    ngOnInit(): void {
        this.loadUser(this.userId());
    }

    loadUser(id: number): void {
        if (id <= 0) {
            return;
        }

        this.userId.set(id);
        this.currentUser.set(undefined);

        this.usersService.getUserById(id).subscribe(user => {
            console.log(user);
            this.currentUser.set(user);
        });
    }

}

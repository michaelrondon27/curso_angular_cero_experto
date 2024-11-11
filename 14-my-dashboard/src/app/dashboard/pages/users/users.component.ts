import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { TitleComponent } from '@shared/title/title.component';

// Services
import { UsersService } from '@services/users.service';

@Component({
    standalone: true,
    imports: [
        RouterModule,
        TitleComponent
    ],
    templateUrl: './users.component.html',
    styles: ``
})
export default class UsersComponent {

    public usersService: UsersService = inject(UsersService);

}

import { Component, computed, signal } from '@angular/core';

// Interfaces
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

    public user = signal<User>({
        avatar: 'https//:reqres.in/img/faces/1-image.jpg',
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        id: 1,
        last_name: 'Bluth'
    });

    public fullName = computed<string>(() => `${ this.user().first_name } ${ this.user().last_name }`)

    onFieldUpdated(field: keyof User, value: string) {
        this.user.update(current => {
            switch (field) {
                case 'avatar':
                    current.avatar = value;
                    break;

                case 'email':
                    current.email = value;
                    break;

                case 'first_name':
                    current.first_name = value;
                    break;

                case 'id':
                    current.id = Number(value);
                    break;

                case 'last_name':
                    current.last_name = value;
                    break;
            }

            return current;
        });
    }

}

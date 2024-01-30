import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Publisher } from '../../interfaces/hero.interface';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html'
})
export class NewPageComponent {

    public heroForm: FormGroup = new FormGroup({
        alt_img:          new FormControl(''),
        alter_ego:        new FormControl(''),
        characters:       new FormControl(''),
        first_appearance: new FormControl(''),
        id:               new FormControl<string>(''),
        publisher:        new FormControl<Publisher>(Publisher.DCComics),
        superhero:        new FormControl<string>('', { nonNullable: true })
    });

    public publishers = [
        { id: Publisher.DCComics, desc: 'DC - Comics' },
        { id: Publisher.MarvelComics, desc: 'Marvel - Comics' }
    ];

    onSubmit(): void {

    }

}

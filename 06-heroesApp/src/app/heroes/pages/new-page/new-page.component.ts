import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

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

    constructor(
        private heroesService: HeroesService
    ) { }

    get currentHero(): Hero {
        const hero = this.heroForm.value as Hero;

        return hero;
    }

    onSubmit(): void {
        if (this.heroForm.invalid) return;



        // this.heroesService.updateHero();
    }

}

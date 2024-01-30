import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html'
})
export class NewPageComponent implements OnInit {

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
        private activatedRoute: ActivatedRoute,
        private heroesService: HeroesService,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (!this.router.url.includes('edit')) return;

        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.heroesService.getHeroById(id))
            ).subscribe(hero => {
                if (!hero) return this.router.navigateByUrl('/');

                this.heroForm.reset(hero);
                return;
            });
    }

    get currentHero(): Hero {
        const hero = this.heroForm.value as Hero;

        return hero;
    }

    onSubmit(): void {
        if (this.heroForm.invalid) return;

        if (this.currentHero.id) {
            this.heroesService.updateHero(this.currentHero)
                .subscribe(hero => console.log);

            return;
        }

        this.heroesService.addHero(this.currentHero)
            .subscribe(hero => console.log)
    }

}

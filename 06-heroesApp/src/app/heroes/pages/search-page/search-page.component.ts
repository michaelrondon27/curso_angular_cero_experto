import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html'
})
export class SearchPageComponent {

    public heroes: Hero[] = [];
    public searchInput: FormControl = new FormControl('');
    public selectedHero?: Hero;

    constructor(
        private heroesService: HeroesService
    ) { }

    onSelectedOption(event: MatAutocompleteSelectedEvent): void {
        if (!event.option.value) {
            this.selectedHero = undefined;
            return;
        }

        const hero: Hero = event.option.value;

        this.searchInput.setValue(hero.superhero);

        this.selectedHero = hero;
        console.log('selectedHero', this.selectedHero);
    }

    searchHero(): void {
        const value: string = this.searchInput.value || '';

        this.heroesService.getSuggestions(value)
            .subscribe(heroes => this.heroes = heroes);
    }

}

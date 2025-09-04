import { Pipe, PipeTransform } from '@angular/core';

// Interfaces
import { Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroSortBy'
})
export class HeroSortByPipe implements PipeTransform {
    transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
        if (!sortBy) {
            return value;
        }

        switch (sortBy) {
            case 'canFly':
                return value.sort((a: Hero, b: Hero) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1));

            case 'color':
                return value.sort((a: Hero, b: Hero) => a.color - b.color);

            case 'creator':
                return value.sort((a: Hero, b: Hero) => a.creator - b.creator);

            case 'name':
                return value.sort((a: Hero, b: Hero) => a.name.localeCompare(b.name));

            default:
                return value;
        }
    }
}

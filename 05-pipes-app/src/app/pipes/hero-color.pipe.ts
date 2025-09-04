import { Pipe, PipeTransform } from '@angular/core';

// Interfaces
import { Color } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroColor'
})
export class HeroColorPipe implements PipeTransform {
    transform(value: Color): string {
        return Color[value];
    }
}

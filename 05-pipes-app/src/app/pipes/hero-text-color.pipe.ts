import { Pipe, PipeTransform } from '@angular/core';

// Interfaces
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroTextColor'
})
export class HeroTextColorPipe implements PipeTransform {
    transform(value: Color): string {
        return ColorMap[value];
    }
}

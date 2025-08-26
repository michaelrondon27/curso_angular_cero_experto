import { Component, input, InputSignal } from '@angular/core';

// Interfaces
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'country-list',
    imports: [],
    templateUrl: './country-list.component.html'
})
export class CountryListComponent {

    public countries: InputSignal<Country[]> = input.required<Country[]>();

}

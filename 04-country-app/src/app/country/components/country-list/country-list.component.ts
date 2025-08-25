import { Component, input, InputSignal } from '@angular/core';

// Interfaces
import { RestCountry } from '../../interfaces/rest-countries.interface';

@Component({
    selector: 'country-list',
    imports: [],
    templateUrl: './country-list.component.html'
})
export class CountryListComponent {

    public countries: InputSignal<RestCountry[]> = input.required<RestCountry[]>();

}

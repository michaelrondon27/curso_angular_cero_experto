import { Component, input, InputSignal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

// Interfaces
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'country-list',
    imports: [
        DecimalPipe
    ],
    templateUrl: './country-list.component.html'
})
export class CountryListComponent {

    public countries: InputSignal<Country[]> = input.required<Country[]>();

}

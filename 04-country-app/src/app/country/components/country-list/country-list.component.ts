import { Component, input, InputSignal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

// Interfaces
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'country-list',
    imports: [
        DecimalPipe,
        RouterLink
    ],
    templateUrl: './country-list.component.html'
})
export class CountryListComponent {

    public countries: InputSignal<Country[]> = input.required<Country[]>();

}

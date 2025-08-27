import { Component, input, InputSignal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

// Interfaces
import { Country } from '../../../../interfaces/country.interface';

@Component({
    selector: 'country-information',
    imports: [
        DecimalPipe
    ],
    templateUrl: './country-information.component.html'
})
export class CountryInformationComponent {

    public country: InputSignal<Country> = input.required<Country>();

}

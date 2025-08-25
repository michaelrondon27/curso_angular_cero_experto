import { Component } from '@angular/core';

// Components
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
    selector: 'app-by-country-page',
    imports: [
        CountryListComponent,
        SearchInputComponent
    ],
    templateUrl: './by-country-page.component.html'
})
export default class ByCountryPageComponent { }

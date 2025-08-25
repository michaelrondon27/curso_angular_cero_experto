import { Component } from '@angular/core';

// Components
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
    selector: 'app-by-region-page',
    imports: [
        CountryListComponent
    ],
    templateUrl: './by-region-page.component.html'
})
export default class ByRegionPageComponent { }

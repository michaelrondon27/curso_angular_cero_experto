import { Component, inject } from '@angular/core';

// Components
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

// Services
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-capital-page',
    imports: [
        CountryListComponent,
        SearchInputComponent
    ],
    templateUrl: './by-capital-page.component.html'
})
export default class ByCapitalPageComponent {

    private _countrySercice: CountryService = inject(CountryService);

    onSearch(query: string): void {
        this._countrySercice.searchByCapital(query).subscribe({
            next: (resp) => console.log(resp)
        });
    }

}

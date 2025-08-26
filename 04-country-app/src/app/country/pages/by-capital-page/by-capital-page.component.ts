import { Component, inject, ResourceRef, signal, WritableSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

// Components
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

// Interfaces
import { Country } from '../../interfaces/country.interface';

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

    public query: WritableSignal<string> = signal<string>('');

    public countryResource: ResourceRef<Country[] | undefined> = rxResource({
        params: () => ({ query: this.query() }),
        stream: ({ params }) => {
            if (!params.query) {
                return of([]);
            }

            return this._countrySercice.searchByCountry(params.query);
        }
    });

}

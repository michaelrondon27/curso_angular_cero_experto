import { Component, inject, signal, WritableSignal } from '@angular/core';

// Components
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

// Interfaces
import { RestCountry } from '../../interfaces/rest-countries.interface';

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

    public countries: WritableSignal<RestCountry[]> = signal<RestCountry[]>([]);
    public hasError : WritableSignal<string | null> = signal<string | null>(null);
    public isLoading: WritableSignal<boolean> = signal<boolean>(false);

    onSearch(query: string): void {
        this._countrySercice.searchByCapital(query).subscribe({
            next: (countries: RestCountry[]) => {
                this.countries.set(countries);
                this.isLoading.set(false);
            }
        });
    }

}

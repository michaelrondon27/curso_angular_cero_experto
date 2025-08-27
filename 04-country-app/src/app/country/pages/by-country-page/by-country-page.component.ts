import { Component, inject, linkedSignal, ResourceRef, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

// Components
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

// Interfaces
import { Country } from '../../interfaces/country.interface';

// Services
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-country-page',
    imports: [
        CountryListComponent,
        SearchInputComponent
    ],
    templateUrl: './by-country-page.component.html'
})
export default class ByCountryPageComponent {

    private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private _countryService: CountryService = inject(CountryService);
    private _router        : Router = inject(Router);

    private _queryParams: WritableSignal<string> = signal<string>(this._activatedRoute.snapshot.queryParamMap.get('query') ?? '');

    public query: WritableSignal<string> = linkedSignal<string>(() => this._queryParams());

    public countryResource: ResourceRef<Country[] | undefined> = rxResource({
        params: () => ({ query: this.query() }),
        stream: ({ params }) => {
            if (!params.query) {
                return of([]);
            }

            this._router.navigate(['/country/by-country'], {
                queryParams: {
                    query: params.query
                }
            });

            return this._countryService.searchByCountry(params.query).pipe(
                catchError(() => of([]))
            );
        }
    });

}

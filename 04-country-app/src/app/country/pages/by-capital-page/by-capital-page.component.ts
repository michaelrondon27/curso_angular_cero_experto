import { Component, inject, linkedSignal, ResourceRef, signal, WritableSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

// Components
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

// Interfaces
import { Country } from '../../interfaces/country.interface';

// Services
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-by-capital-page',
    imports: [
        CountryListComponent,
        SearchInputComponent
    ],
    templateUrl: './by-capital-page.component.html'
})
export default class ByCapitalPageComponent {

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

            this._router.navigate(['/country/by-capital'], {
                queryParams: {
                    query: params.query
                }
            });

            return this._countryService.searchByCapital(params.query).pipe(
                catchError(() => of([]))
            );
        }
    });

}

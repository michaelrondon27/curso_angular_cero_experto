import { Component, inject, linkedSignal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

// Components
import { CountryListComponent } from '../../components/country-list/country-list.component';

// Services
import { CountryService } from '../../services/country.service';

// Types
import { Region } from '../../types/region.type';

@Component({
    selector: 'app-by-region-page',
    imports: [
        CountryListComponent
    ],
    templateUrl: './by-region-page.component.html'
})
export default class ByRegionPageComponent {

    private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private _countryService: CountryService = inject(CountryService);
    private _router        : Router = inject(Router);

    private _queryParams: WritableSignal<string> = signal<string>(this._activatedRoute.snapshot.queryParamMap.get('region') ?? '');

    public regions: WritableSignal<Region[]> = signal<Region[]>([
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Antarctic',
    ]);
    public selectedRegion: WritableSignal<Region> = linkedSignal<Region>(() => (this._queryParams()) as Region ?? 'Americas');

    public countryResource = rxResource({
        params: () => ({ region: this.selectedRegion() }),
        stream: ({ params }) => {
            if (!params.region) {
                return of([]);
            }

            this._router.navigate(['/country/by-region'], {
                queryParams: {
                    region: params.region
                }
            });

            return this._countryService.searchByRegion(params.region).pipe(
                catchError(() => of([]))
            );
        }
    })

}

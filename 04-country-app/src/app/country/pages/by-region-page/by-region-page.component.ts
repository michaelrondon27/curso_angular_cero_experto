import { Component, inject, signal, WritableSignal } from '@angular/core';
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

    private _countryService: CountryService = inject(CountryService);

    public regions: WritableSignal<Region[]> = signal<Region[]>([
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Antarctic',
    ]);
    public selectedRegion: WritableSignal<Region | null> = signal<Region | null>(null);

    public countryResource = rxResource({
        params: () => ({ region: this.selectedRegion() }),
        stream: ({ params }) => {
            if (!params.region) {
                return of([]);
            }

            return this._countryService.searchByRegion(params.region).pipe(
                catchError(() => of([]))
            );
        }
    })

}

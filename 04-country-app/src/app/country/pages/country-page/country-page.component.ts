import { Component, inject, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { Country } from '../../interfaces/country.interface';

// Services
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-country-page',
    imports: [],
    templateUrl: './country-page.component.html'
})
export default class CountryPageComponent {

    private _countryCode: string = inject(ActivatedRoute).snapshot.params['code'];
    private _countryService: CountryService = inject(CountryService);

    public countryResource: ResourceRef<Country | undefined> = rxResource({
        params: () => ({ code: this._countryCode }),
        stream: ({ params }) => this._countryService.searchByAlphaCode(params.code)
    });

}

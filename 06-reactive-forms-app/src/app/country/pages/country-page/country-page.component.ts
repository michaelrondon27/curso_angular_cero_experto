import { Component, inject, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Services
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-country-page',
    imports: [
        JsonPipe,
        ReactiveFormsModule
    ],
    templateUrl: './country-page.component.html'
})
export default class CountryPageComponent {

    private _countryService: CountryService = inject(CountryService);
    private _formBuilder   : FormBuilder = inject(FormBuilder);

    public borders  : WritableSignal<Country[]> = signal<Country[]>([]);
    public countries: WritableSignal<Country[]> = signal<Country[]>([]);
    public myForm   : WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        border: ['', [Validators.required]],
        country: ['', [Validators.required]],
        region: ['', [Validators.required]]
    }));
    public regions  : WritableSignal<string[]> = signal<string[]>(this._countryService.regions);

}

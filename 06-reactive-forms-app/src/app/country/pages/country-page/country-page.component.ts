import { Component, effect, EffectRef, inject, signal, WritableSignal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription, switchMap, tap } from 'rxjs';

// Interfaces
import { Country } from '../../interfaces/country.interface';

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

    public onFormChanged: EffectRef = effect((onCleanup) => {
        const regionSubscription: Subscription = this.onRegionChanged();

        onCleanup(() => {
            regionSubscription.unsubscribe();
        });
    });

    onRegionChanged(): Subscription {
        return this.myForm().get('region')!.valueChanges
            .pipe(
                tap(() => this.myForm().get('border')!.setValue('')),
                tap(() => this.myForm().get('country')!.setValue('')),
                tap(() => {
                    this.borders.set([]);
                    this.countries.set([]);
                }),
                switchMap((region: string) => this._countryService.getCountriesByRegion(region ?? ''))
            )
            .subscribe((countries: Country[]) => this.countries.set(countries));
    }

}

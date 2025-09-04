import { Component, effect, EffectRef, inject, LOCALE_ID, signal, WritableSignal } from '@angular/core';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

// Services
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
    selector: 'app-basic-page',
    imports: [
        DatePipe,
        LowerCasePipe,
        TitleCasePipe,
        UpperCasePipe
    ],
    templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {

    private _localeService: LocaleService = inject(LocaleService);

    public customDate: WritableSignal<Date> = signal<Date>(new Date());
    public fullName  : WritableSignal<string> = signal<string>('mIcHaEl RoNdOn');
    public localeId  : WritableSignal<string>  = signal<string>(inject(LOCALE_ID));
    public nameLower : WritableSignal<string> = signal<string>('michael');
    public nameUpper : WritableSignal<string> = signal<string>('MICHAEL');

    public tickingDateEffect: EffectRef = effect((onCleanup) => {
        const interval: number = setInterval(() => {
            this.customDate.set(new Date());
        }, 1000);

        onCleanup(() => {
            clearInterval(interval);
        });
    });

    changeLocale(locale: AvailableLocale): void {
        this._localeService.changeLocale(locale);
    }

}

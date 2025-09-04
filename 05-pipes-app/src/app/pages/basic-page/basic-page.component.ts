import { Component, effect, EffectRef, signal, WritableSignal } from '@angular/core';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

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

    public customDate: WritableSignal<Date> = signal<Date>(new Date());
    public fullName  : WritableSignal<string> = signal<string>('mIcHaEl RoNdOn');
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

}

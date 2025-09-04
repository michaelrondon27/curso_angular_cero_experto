import { Component, signal, WritableSignal } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-basic-page',
    imports: [
        LowerCasePipe,
        TitleCasePipe,
        UpperCasePipe
    ],
    templateUrl: './basic-page.component.html'
})
export default class BasicPageComponent {

    public fullName : WritableSignal<string> = signal<string>('mIcHaEl RoNdOn');
    public nameLower: WritableSignal<string> = signal<string>('michael');
    public nameUpper: WritableSignal<string> = signal<string>('MICHAEL');

}

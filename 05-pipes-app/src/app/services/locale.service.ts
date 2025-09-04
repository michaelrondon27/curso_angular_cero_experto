import { Injectable, signal, WritableSignal } from '@angular/core';

export type AvailableLocale = 'en' | 'es' | 'pl';

@Injectable({
    providedIn: 'root'
})
export class LocaleService {
    
    private currentLocale: WritableSignal<AvailableLocale> = signal<AvailableLocale>('es');

    constructor() {
        this.currentLocale.set(localStorage.getItem('locale') as AvailableLocale ?? 'es')
    }

    get getLocale(): AvailableLocale {
        return this.currentLocale();
    }

    changeLocale(locale: AvailableLocale): void {
        localStorage.setItem('locale', locale);
        this.currentLocale.set(locale);

        window.location.reload();
    }
    
}

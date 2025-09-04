import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localePl from '@angular/common/locales/pl';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Routes
import { routes } from './app.routes';

// Services
import { LocaleService } from './services/locale.service';

registerLocaleData(localeEs, 'es');
registerLocaleData(localePl, 'pl');

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideZoneChangeDetection({ eventCoalescing: true }),
        {
            deps: [LocaleService],
            provide: LOCALE_ID,
            useFactory: (localeService: LocaleService) => localeService.getLocale
        }
    ]
};

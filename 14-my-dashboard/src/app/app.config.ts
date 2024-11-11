import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(
            routes,
            withViewTransitions()
        )
    ]
};

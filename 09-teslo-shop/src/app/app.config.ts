import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

// Interceptors
import { authInterceptor } from '@auth/interceptors/auth.interceptor';

// Routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(
            withFetch(),
            withInterceptors([
                authInterceptor
            ])
        ),
        provideRouter(routes),
        provideZonelessChangeDetection()
    ]
};

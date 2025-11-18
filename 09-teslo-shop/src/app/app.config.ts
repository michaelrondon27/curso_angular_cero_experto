import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

// Interceptors
import { loggingInterceptor } from '@shared/interceptors/logging.interceptor';

// Routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(
            withFetch(),
            withInterceptors([
                loggingInterceptor
            ])
        ),
        provideRouter(routes),
        provideZonelessChangeDetection()
    ]
};

import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

// Services
import { AuthService } from '@auth/services/auth.service';

export const NotAuthenticatedGuard: CanMatchFn = async (
    route   : Route,
    segments: UrlSegment[]
) => {
    const authService: AuthService = inject(AuthService);
    const router     : Router = inject(Router);

    const isAuthenticated: boolean = await firstValueFrom(authService.checkStatus());

    if (isAuthenticated) {
        router.navigate(['/']);

        return false;
    }

    return true;
}

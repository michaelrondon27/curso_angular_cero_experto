import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

const checkAuthStatus = (): Observable<boolean> => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    return authService.checkAuthentication()
        .pipe(
            tap((isAuthenticated: boolean) => {
                if (!isAuthenticated) {
                    router.navigate(['/auth/login']);
                }
            })
        );
}

export const CanActivateAuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    return checkAuthStatus();
}

export const CanMatchAuthGuard: CanMatchFn = (
    route: Route,
    segments: UrlSegment[]
) => {
    return checkAuthStatus();
}

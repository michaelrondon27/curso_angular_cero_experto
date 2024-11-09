import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";

// Enums
import { AuthStatus } from "../enums";

// Services
import { AuthService } from "../services/auth.service";

export const isAuthenticatedGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    if (authService.authStatus() === AuthStatus.authenticated) {
        return true;
    }

    router.navigateByUrl('/auth/login');

    return false;
};

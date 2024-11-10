import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";

// Enums
import { AuthStatus } from "../enums";

// Services
import { AuthService } from "../services/auth.service";

export const isNotAuthenticatedGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    if (authService.authStatus() === AuthStatus.authenticated) {
        router.navigateByUrl('/dashboard')
        return false;
    }

    return true;
};

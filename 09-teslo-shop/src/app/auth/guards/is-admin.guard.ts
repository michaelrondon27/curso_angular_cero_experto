import { CanMatchFn, Route, UrlSegment } from "@angular/router";
import { inject } from "@angular/core";
import { firstValueFrom } from "rxjs";

// Services
import { AuthService } from "@auth/services/auth.service";

export const IsAdminGuard: CanMatchFn = async (
    route  : Route,
    segment: UrlSegment[]
) => {
    const authService: AuthService = inject(AuthService);

    await firstValueFrom(authService.checkStatus());

    return authService.isAdmin();
}

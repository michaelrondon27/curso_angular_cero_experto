import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';

export const CanActivateAuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    return false;
}

export const CanMatchAuthGuard: CanMatchFn = (
    route: Route,
    segments: UrlSegment[]
) => {
    return false;
}

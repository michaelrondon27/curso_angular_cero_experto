import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Event, NavigationEnd, Route, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

// Routes
import { routes } from '../../../app.routes';

interface RouteNavBar {
    path : string;
    title: string;
}

@Component({
    selector: 'app-navbar',
    imports: [
        RouterLink
    ],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    private _router: Router = inject(Router);

    public routes: WritableSignal<RouteNavBar[]> = signal<RouteNavBar[]>(
        routes.filter((route: Route) => route.path !== '**')
            .map((route: Route) => ({
                path: route.path!,
                title: `${ route.title ?? 'Maps en Angular' }`
            }))
    );

    public pageTitle: Signal<string | undefined> = toSignal<string>(this._router.events.pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url),
        map((url: string) => this.routes().find((route: RouteNavBar) => `/${ route.path }` === url)?.title ?? 'Mapas')
    ));

}

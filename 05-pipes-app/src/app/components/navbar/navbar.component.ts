import { Component, signal, WritableSignal } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';

// Routes
import { routes } from '../../app.routes';

interface RouteItem {
    path : string;
    title: string;
}

@Component({
    selector: 'app-navbar',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    public routes: WritableSignal<RouteItem[]> = signal<RouteItem[]>(routes.map((x: Route) => ({
        path: x.path ?? '',
        title: x.title?.toString() ?? ''
    })));

}

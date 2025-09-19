import { Component, signal, WritableSignal } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';

// Routes
import reactiveRoutes from '../../../reactive/reactive.routes';

const reactiveItems = reactiveRoutes[0].children ?? [];

interface MenuItem {
    route: string;
    title: string;
}

@Component({
    selector: 'app-side-menu',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

    public authMenu    : WritableSignal<MenuItem[]> = signal<MenuItem[]>([
        { route: 'auth', title: 'Registro' }
    ]);
    public countryMenu : WritableSignal<MenuItem[]> = signal<MenuItem[]>([
        { route: 'country', title: 'Países' }
    ]);
    public reactiveMenu: WritableSignal<MenuItem[]> = signal<MenuItem[]>(
        reactiveItems.filter((item: Route) => item.path !== '**')
            .map((item: Route) => ({
                route: `reactive/${ item.path }`,
                title: `${ item.title }`
            }))
    );

}

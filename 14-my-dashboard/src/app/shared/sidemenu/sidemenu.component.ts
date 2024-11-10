import { Component } from '@angular/core';
import { Route } from '@angular/router';

// Routes
import { routes } from '../../app.routes';

@Component({
    selector: 'app-sidemenu',
    standalone: true,
    imports: [],
    templateUrl: './sidemenu.component.html',
    styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

    public menuItems: Route[] = routes.map((route: Route) => route.children ?? []).flat()
        .filter((route: Route) => route && route.path)
        .filter((route: Route) => !route.path?.includes(':'));

}

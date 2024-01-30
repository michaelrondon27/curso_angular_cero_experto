import { Component } from '@angular/core';

interface MenuItem {
    route: string;
    title: string;
}

@Component({
    selector: 'shared-side-menu',
    templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

    public reactiveMenu: MenuItem[] = [
        {
            route: './reactive/basic',
            title: 'Básico'
        },
        {
            route: './reactive/dynamic',
            title: 'Dinámico'
        },
        {
            route: './reactive/switches',
            title: 'Switches'
        }
    ];

    public authMenu: MenuItem[] = [
        {
            route: './auth',
            title: 'Registro'
        }
    ];

}

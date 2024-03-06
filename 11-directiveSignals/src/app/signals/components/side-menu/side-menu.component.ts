import { Component, WritableSignal, signal } from '@angular/core';

interface MenuItem {
    route: string;
    title: string;
}

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

    public menuItems: WritableSignal<MenuItem[]> = signal<MenuItem[]>([
        {
            route: 'counter',
            title: 'Contador'
        },
        {
            route: 'user-info',
            title: 'Usuario'
        },
        {
            route: 'properties',
            title: 'Mutaciones'
        }
    ]);

    // public menuItems: MenuItem[] = [
    //     {
    //         route: 'counter',
    //         title: 'Contador'
    //     },
    //     {
    //         route: 'user-info',
    //         title: 'Usuario'
    //     },
    //     {
    //         route: 'properties',
    //         title: 'Mutaciones'
    //     }
    // ];

}

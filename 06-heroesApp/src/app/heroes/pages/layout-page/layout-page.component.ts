import { Component } from '@angular/core';

@Component({
    selector: 'app-layout-page',
    templateUrl: './layout-page.component.html'
})
export class LayoutPageComponent {

    public sidebarItems = [
        {
            icon: 'label',
            label: 'Listado',
            url: './list'
        },
        {
            icon: 'add',
            label: 'Añadir',
            url: './new-hero'
        },
        {
            icon: 'search',
            label: 'Buscar',
            url: './search'
        }
    ];

}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'shared-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
            {
                icon: 'pi pi-desktop',
                items: [
                    {
                        icon: 'pi pi-align-left',
                        label: 'Textos y Fechas',
                        routerLink: '7'
                    },
                    {
                        icon: 'pi pi-dollar',
                        label: 'Números',
                        routerLink: 'numbers'
                    },
                    {
                        icon: 'pi pi-globe',
                        label: 'No comunes',
                        routerLink: 'uncommon'
                    }
                ],
                label: 'Pipes de Angular'
            },
            {
                icon: 'pi pi-cog',
                items: [
                    {
                        icon: 'pi pi-cog',
                        label: 'Custom Pipes',
                        routerLink: 'custom'
                    }
                ],
                label: 'Pipes personalizados'
            }
        ];
    }

}

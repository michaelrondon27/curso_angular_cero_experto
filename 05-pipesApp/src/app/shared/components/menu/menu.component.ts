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
                        label: 'Textos y Fechas'
                    },
                    {
                        icon: 'pi pi-dollar',
                        label: 'Números'
                    },
                    {
                        icon: 'pi pi-globe',
                        label: 'No comunes'
                    }
                ],
                label: 'Pipes de Angular'
            },
            {
                icon: 'pi pi-cog',
                items: [
                    {
                        icon: 'pi pi-cog',
                        label: 'Otro elemento'
                    }
                ],
                label: 'Pipes personalizados'
            }
        ];
    }

}

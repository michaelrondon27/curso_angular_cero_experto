import { Component } from '@angular/core';

@Component({
    selector: 'app-uncommon-page',
    templateUrl: './uncommon-page.component.html',
    styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

    // i18nSelect
    public gender: 'female'|'male' = 'male';
    public invitationMap = {
        female: 'invitarla',
        male: 'invitarlo'
    };
    public name: string = 'Michael';

    changeClient(): void {
        this.gender = 'female';
        this.name = 'Melissa';
    }

    // i18nPlural
    public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
    public clientsMap = {
        '=0': 'no tenemos ningún cliente esperando',
        '=1': 'tenemos un cliente esperando',
        'other': 'tenemos # clientes esperando'
    };

    deleteClient(): void {
        this.clients.shift();
    }

}

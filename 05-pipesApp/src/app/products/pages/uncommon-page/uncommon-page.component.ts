import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

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

    // KeyValue
    public person = {
        addres: 'Madrid, España',
        age: 30,
        name: 'Michael'
    };

    // Async
    public myObservableTimer: Observable<number> = interval(2000);
    public promiseValue: Promise<string> = new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver('Tenemos data en la promesa');
        }, 3500);
    });

}

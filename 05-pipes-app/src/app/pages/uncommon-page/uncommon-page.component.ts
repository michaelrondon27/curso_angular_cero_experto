import { Component, signal, WritableSignal } from '@angular/core';
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';

// Components
import { CardComponent } from '../../components/card/card.component';

interface Client {
    address: string;
    age    : number;
    gender : string;
    name   : string;
};

const client1: Client = {
    address: 'Madrid, Spain',
    age: 32,
    gender: 'male',
    name: 'Michael'
};

const client2: Client = {
    address: 'Wroclaw, Poland',
    age: 25,
    gender: 'female',
    name: 'Ania'
};

@Component({
    selector: 'app-uncommon-page',
    imports: [
        CardComponent,
        I18nPluralPipe,
        I18nSelectPipe,
        JsonPipe,
        KeyValuePipe,
        SlicePipe
    ],
    templateUrl: './uncommon-page.component.html'
})
export default class UncommonPageComponent {

    public client       : WritableSignal<Client> = signal<Client>(client1);
    public clients      : WritableSignal<string[]> = signal<string[]>(['Maria', 'Pedro', 'Fernando', 'Melissa', 'Natalia', 'Andrea', 'Juan', 'Carlos']);
    public clientsMap   : WritableSignal<Record<string, string>> = signal<Record<string, string>>({
        '=0': 'no tenemos ningún cliente esperando',
        '=1': 'hay tenemos un cliente esperando',
        other: 'hay tenemos # clientes esperando'
    });
    public invitationMap: WritableSignal<{ [key: string]: string; }> = signal<{ [key: string]: string; }>({ female: 'invitarla', male: 'invitarlo' });
    public profile      : WritableSignal<Client> = signal<Client>({ address: 'Caracas, Venezuela', age: 61, gender: 'male', name: 'Carlos' });
    

    changeClient(): void {
        if (this.client() === client1) {
            this.client.set(client2);
            
            return;
        }

        this.client.set(client1);
    }

    deleteClient(): void {
        this.clients.update((prev: string[]) => prev.slice(1));
    }

}

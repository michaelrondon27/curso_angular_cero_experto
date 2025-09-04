import { Component, signal, WritableSignal } from '@angular/core';
import { I18nSelectPipe } from '@angular/common';

// Components
import { CardComponent } from '../../components/card/card.component';

interface Client {
    address: string;
    age    : number;
    gender : string;
    name   : string;
}

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
        I18nSelectPipe
    ],
    templateUrl: './uncommon-page.component.html'
})
export default class UncommonPageComponent {

    public client: WritableSignal<Client> = signal<Client>(client1);
    
    public invitationMap = {
        female: 'invitarla',
        male: 'invitarlo'
    };

    changeClient(): void {
        if (this.client() === client1) {
            this.client.set(client2);
            
            return;
        }

        this.client.set(client1);
    }

}

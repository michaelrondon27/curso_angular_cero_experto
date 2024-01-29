import { Component } from '@angular/core';

@Component({
    selector: 'app-uncommon-page',
    templateUrl: './uncommon-page.component.html',
    styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

    // i18n Select
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

}

import { Component } from '@angular/core';

@Component({
    selector: 'app-basics-page',
    templateUrl: './basics-page.component.html',
    styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

    public fullName: string = "miChaEL rOndoN";
    public nameLower: string = "michael";
    public nameUpper: string = "MICHAEL";

}

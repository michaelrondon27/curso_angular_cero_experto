import { Component } from '@angular/core';

import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
    selector: 'products-order',
    templateUrl: './order.component.html'
})
export class OrderComponent {

    public heroes: Hero[] = [
        {
            canFly: true,
            color: Color.blue,
            name: 'Superman'
        },
        {
            canFly: false,
            color: Color.black,
            name: 'Batman'
        },
        {
            canFly: false,
            color: Color.red,
            name: 'Daredevil'
        },
        {
            canFly: false,
            color: Color.red,
            name: 'Robin'
        },
        {
            canFly: true,
            color: Color.green,
            name: 'Linterna Verde'
        }
    ];
    public isUpperCase: boolean = false;

    toggleUpperCase(): void {
        this.isUpperCase = !this.isUpperCase;
    }

}

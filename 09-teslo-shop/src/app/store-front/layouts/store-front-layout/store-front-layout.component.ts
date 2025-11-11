import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { FrontNavbarComponent } from '../../components/front-navbar/front-navbar.component';

@Component({
    selector: 'app-store-front-layout',
    imports: [
        FrontNavbarComponent,
        RouterOutlet
    ],
    templateUrl: './store-front-layout.component.html'
})
export default class StoreFrontLayoutComponent { }

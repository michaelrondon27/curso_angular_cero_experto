import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './navbar.component.html',
    styles: `
        nav {
            align-items: center;
            display: flex;
            gap: 1rem;
            justify-content: center;
        }

        .active {
            color: #341162;
            font-weight: bold;
        }
    `
})
export class NavbarComponent { }

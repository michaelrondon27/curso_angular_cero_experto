import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
    selector: 'app-dashboard-page',
    imports: [
        SideMenuComponent,
        RouterOutlet
    ],
    templateUrl: './dashboard-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DashboardPageComponent { }

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

// Environments
import { environment } from '@environments/environment';

@Component({
    selector: 'gifs-side-menu-header',
    imports: [],
    templateUrl: './side-menu-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuHeaderComponent {

    public envs = signal(environment);

}

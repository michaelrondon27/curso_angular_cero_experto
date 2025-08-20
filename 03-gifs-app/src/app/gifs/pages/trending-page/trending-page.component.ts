import { ChangeDetectionStrategy, Component } from '@angular/core';

// Components
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';

@Component({
    selector: 'app-trending-page',
    imports: [
        GifsListComponent
    ],
    templateUrl: './trending-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TrendingPageComponent { }

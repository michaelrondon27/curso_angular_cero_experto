import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';

// Components
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';

// Interfaces
import { Gif } from '../../interfaces/gif.interface';

// Services
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'app-trending-page',
    imports: [
        GifsListComponent
    ],
    templateUrl: './trending-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TrendingPageComponent {

    private _gifsService: GifsService = inject(GifsService);

    public gifs: Signal<Gif[]> = computed<Gif[]>(() => this._gifsService.trendingGifs());

}

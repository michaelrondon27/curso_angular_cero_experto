import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

// Components
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';

// Services
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'app-search-page',
    imports: [
        GifsListComponent
    ],
    templateUrl: './search-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SearchPageComponent {

    private _gifsService: GifsService = inject(GifsService);

    onSearch(query: string): void {
        this._gifsService.searchGifs(query);
    }

}

import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';

// Components
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';

// Interfaces
import { Gif } from '../../interfaces/gif.interface';

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

    public gif: WritableSignal<Gif[]> = signal<Gif[]>([]);

    onSearch(query: string): void {
        this._gifsService.searchGifs(query).subscribe({
            next: (resp: Gif[]) => this.gif.set(resp)
        });
    }

}

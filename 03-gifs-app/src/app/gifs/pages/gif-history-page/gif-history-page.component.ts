import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';

// Components
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';

// Interfaces
import { Gif } from '../../interfaces/gif.interface';

// Services
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'app-gif-history-page',
    imports: [
        GifsListComponent
    ],
    templateUrl: './gif-history-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class GifHistoryPageComponent {

    private _gifsService: GifsService = inject(GifsService);

    public query: Signal<string | undefined> = toSignal<string>(inject(ActivatedRoute).params.pipe(
        map((params: Params) => params['query'])
    ));

    public gifsByKey: Signal<Gif[]> = computed<Gif[]>(() => this._gifsService.getHistoryGifs(this.query()!));

}

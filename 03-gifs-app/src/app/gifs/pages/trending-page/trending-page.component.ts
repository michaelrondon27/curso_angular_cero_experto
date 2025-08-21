import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, Signal, viewChild } from '@angular/core';

// Interfaces
import { Gif } from '../../interfaces/gif.interface';

// Services
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'app-trending-page',
    imports: [],
    templateUrl: './trending-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TrendingPageComponent {

    private _gifsService: GifsService = inject(GifsService);

    public gifs: Signal<Gif[][]> = computed<Gif[][]>(() => this._gifsService.trendingGifsGroup());

    private _scrollDivRef: Signal<ElementRef<any> | undefined> = viewChild<ElementRef>('groupDiv');

    onScroll(): void {
        console.log(event)
    }

}

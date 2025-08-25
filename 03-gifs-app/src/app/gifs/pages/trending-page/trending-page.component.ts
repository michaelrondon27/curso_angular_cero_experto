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

    private _scrollDivRef: Signal<ElementRef<HTMLDivElement> | undefined> = viewChild<ElementRef>('groupDiv');

    onScroll(event: Event): void {
        const scrollDiv: HTMLDivElement | undefined = this._scrollDivRef()?.nativeElement;

        if (!scrollDiv) {
            return;
        }


        const clientHeight: number = scrollDiv.clientHeight;
        const scrollHeight: number = scrollDiv.scrollHeight;
        const scrollTop   : number = scrollDiv.scrollTop;
        const isAtbottom  : boolean = scrollTop + clientHeight + 300 >= scrollHeight;

        if (isAtbottom) {
            this._gifsService.loadTrendingGifs();
        }
    }

}

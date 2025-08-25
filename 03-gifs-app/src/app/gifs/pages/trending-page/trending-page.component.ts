import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, inject, Signal, viewChild } from '@angular/core';

// Interfaces
import { Gif } from '../../interfaces/gif.interface';

// Services
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

@Component({
    selector: 'app-trending-page',
    imports: [],
    templateUrl: './trending-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TrendingPageComponent implements AfterViewInit {

    private _gifsService       : GifsService = inject(GifsService);
    private _scrollStateService: ScrollStateService = inject(ScrollStateService);

    public gifs: Signal<Gif[][]> = computed<Gif[][]>(() => this._gifsService.trendingGifsGroup());

    private _scrollDivRef: Signal<ElementRef<HTMLDivElement> | undefined> = viewChild<ElementRef>('groupDiv');

    ngAfterViewInit(): void {
        const scrollDiv: HTMLDivElement | undefined = this._scrollDivRef()?.nativeElement;

        if (!scrollDiv) {
            return;
        }

        scrollDiv.scrollTop = this._scrollStateService.trendingScrollState();
    }

    onScroll(event: Event): void {
        const scrollDiv: HTMLDivElement | undefined = this._scrollDivRef()?.nativeElement;

        if (!scrollDiv) {
            return;
        }

        const clientHeight: number = scrollDiv.clientHeight;
        const scrollHeight: number = scrollDiv.scrollHeight;
        const scrollTop   : number = scrollDiv.scrollTop;
        const isAtbottom  : boolean = scrollTop + clientHeight + 300 >= scrollHeight;

        this._scrollStateService.trendingScrollState.set(scrollTop);

        if (isAtbottom) {
            this._gifsService.loadTrendingGifs();
        }
    }

}

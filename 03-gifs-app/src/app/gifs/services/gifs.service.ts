import { computed, effect, EffectRef, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

// Environments
import { environment } from '@environments/environment';

// Interfaces
import { Gif } from '../interfaces/gif.interface';
import { GiphyResponse } from '../interfaces/giphy.interface';

// Mappers
import { GifMapper } from '../mapper/gif.mapper';

const GIFS_KEY: string = 'gifs';

const loadFromLocalStorage = () => {
    const gifsFromLocalStorage: string = localStorage.getItem(GIFS_KEY) ?? '{}';
    const gifs: Record<string, Gif[]> = JSON.parse(gifsFromLocalStorage);

    return gifs;
};

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private _httpClient: HttpClient = inject(HttpClient);

    private _searchHistory: WritableSignal<Record<string, Gif[]>> = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    private _trendingPage : WritableSignal<number> = signal<number>(0);

    public trendingGifs       : WritableSignal<Gif[]> = signal<Gif[]>([]);
    public trendingGifsLoading: WritableSignal<boolean> = signal<boolean>(false);

    public searchHistoryKeys: Signal<string[]> = computed<string[]>(() => Object.keys(this._searchHistory()));
    public trendingGifsGroup: Signal<Gif[][]> = computed<Gif[][]>(() => {
        const groups: Gif[][] = [];

        for (let i = 0; i < this.trendingGifs().length; i += 3) {
            groups.push(this.trendingGifs().slice(i, i + 3));
        }

        return groups;
    });

    private _saveGifsToLocalStorage: EffectRef = effect(() => {
        const historyString: string = JSON.stringify(this._searchHistory());

        localStorage.setItem(GIFS_KEY, historyString);
    });

    constructor() {
        this.loadTrendingGifs();
    }

    getHistoryGifs(query: string): Gif[] {
        return this._searchHistory()[query] ?? [];
    }

    loadTrendingGifs(): void {
        if (this.trendingGifsLoading()) {
            return;
        }

        this.trendingGifsLoading.set(true);

        this._httpClient.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20,
                offset: this._trendingPage() * 20
            }
        }).subscribe({
            next: (resp: GiphyResponse) => {
                const gifs: Gif[] = GifMapper.mapGiphyItemsToGifArray(resp.data);

                this.trendingGifs.update((currentGifs: Gif[]) => [
                    ...currentGifs,
                    ...gifs
                ]);
                this.trendingGifsLoading.set(false);
                this._trendingPage.update((current: number) => current + 1);
            }
        });
    }

    searchGifs(query: string): Observable<Gif[]> {
        return this._httpClient.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20,
                q: query
            }
        }).pipe(
            map((resp: GiphyResponse) => GifMapper.mapGiphyItemsToGifArray(resp.data)),
            tap((items: Gif[]) => {
                this._searchHistory.update((history: Record<string, Gif[]>) => ({
                    ...history,
                    [query.toLowerCase()]: items
                }));
            })
        );
    }

}

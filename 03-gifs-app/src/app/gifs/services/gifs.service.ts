import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Environments
import { environment } from '@environments/environment';

// Interfaces
import { Gif } from '../interfaces/gif.interface';
import { GiphyResponse } from '../interfaces/giphy.interface';

// Mappers
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private _httpClient: HttpClient = inject(HttpClient);

    public trendingGifs: WritableSignal<Gif[]> = signal<Gif[]>([]);

    constructor() {
        this.loadTrendingGifs();
    }

    loadTrendingGifs(): void {
        this._httpClient.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20
            }
        }).subscribe({
            next: (resp: GiphyResponse) => {
                const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);

                this.trendingGifs.set(gifs);
            }
        });
    }

}

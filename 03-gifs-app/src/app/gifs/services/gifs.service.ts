import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Environments
import { environment } from '@environments/environment';

// Interfaces
import { GiphyResponse } from '../interfaces/giphy.interface';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private _httpClient: HttpClient = inject(HttpClient);

    constructor() {
        this.loadTrendingGifs();
    }

    loadTrendingGifs() {
        this._httpClient.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20
            }
        });
    }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    public gifList: Gif[] = [];

    private apikey: string = 'Jzl0BOrsPq2hUbvhpnqqG8hAevs1Ipw0';
    private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
    private _tagsHistory: string[] = [];

    constructor(
        private http: HttpClient
    ) {
        this.loadLocalStorage();
    }

    get tagsHistory(): string[] {
        return [...this._tagsHistory];
    }

    private loadLocalStorage(): void {
        if (!localStorage.getItem('history')) return;

        this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

        if (this._tagsHistory.length === 0) return;

        this.searchTag(this._tagsHistory[0]);
    }

    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this.tagsHistory.splice(0, 10);
        this.saveLocalStorage();
    }

    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }

    searchTag(tag: string): void {
        if (tag.length === 0) return;

        this.organizeHistory(tag);

        const params: HttpParams = new HttpParams()
            .set('api_key', this.apikey)
            .set('limit', 12)
            .set('q', tag);

        this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
            .subscribe(resp => {
                this.gifList = resp.data;
            })
    }

}

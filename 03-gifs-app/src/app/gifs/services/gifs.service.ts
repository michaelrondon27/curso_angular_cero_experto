import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private apikey: string = 'Jzl0BOrsPq2hUbvhpnqqG8hAevs1Ipw0';
    private _tagsHistory: string[] = [];

    get tagsHistory(): string[] {
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this.tagsHistory.splice(0, 10);
    }

    searchTag(tag: string): void {
        if (tag.length === 0) return;

        this.organizeHistory(tag);
    }

}

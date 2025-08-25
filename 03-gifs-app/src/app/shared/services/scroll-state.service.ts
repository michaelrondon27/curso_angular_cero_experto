import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrollStateService {

    public trendingScrollState: WritableSignal<number> = signal<number>(0);

}

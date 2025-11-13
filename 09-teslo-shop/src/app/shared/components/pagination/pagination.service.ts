import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaginationService {

    private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    public currentPage: Signal<number> = toSignal<number, 1>(this._activatedRoute.queryParamMap.pipe(
        map((params: ParamMap) => params.get('page') ? +params.get('page')! : 1),
        map((page: number) => isNaN(page) ? 1 : page)
    ), { initialValue: 1 });

}

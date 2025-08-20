import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';

@Component({
    selector: 'app-gif-history-page',
    imports: [],
    templateUrl: './gif-history-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class GifHistoryPageComponent {

    private _params: Signal<string | undefined> = toSignal(inject(ActivatedRoute).params.pipe(
        map((params: Params) => params['query'] as string)
    ));

}

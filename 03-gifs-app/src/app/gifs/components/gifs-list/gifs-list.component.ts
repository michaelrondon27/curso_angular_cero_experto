import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

// Components
import { GifsListItemComponent } from './gifs-list-item/gifs-list-item.component';

// Interfaces
import { Gif } from '../../interfaces/gif.interface';

@Component({
    selector: 'gifs-list',
    imports: [
        GifsListItemComponent
    ],
    templateUrl: './gifs-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GifsListComponent {

    public gifs: InputSignal<Gif[]> = input.required<Gif[]>();

}

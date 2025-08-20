import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Services
import { GifsService } from 'src/app/gifs/services/gifs.service';

interface MenuOptions {
    icon    : string;
    label   : string;
    route   : string;
    subLabel: string;
}

@Component({
    selector: 'gifs-side-menu-options',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './side-menu-options.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuOptionsComponent {

    private _gifsService: GifsService = inject(GifsService);

    public menuOptions: WritableSignal<MenuOptions[]> = signal<MenuOptions[]>([
        {
            icon: 'fa-solid fa-chart-line',
            label: 'Trending',
            route: '/dashboard/trending',
            subLabel: 'Gifs populares'
        },
        {
            icon: 'fa-solid fa-magnifying-glass',
            label: 'Buscador',
            route: '/dashboard/search',
            subLabel: 'Buscar gifs'
        }
    ]);

    public searchHistoryKeys: Signal<string[]> = computed<string[]>(() => this._gifsService.searchHistoryKeys());

}

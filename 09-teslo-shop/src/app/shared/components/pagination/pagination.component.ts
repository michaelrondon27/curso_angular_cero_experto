import { Component, computed, input, InputSignal, linkedSignal, Signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pagination',
    imports: [
        RouterLink
    ],
    templateUrl: './pagination.component.html'
})
export class PaginationComponent {

    public currentPage: InputSignal<number> = input<number>(1);
    public pages      : InputSignal<number> = input<number>(0);

    public activePage: WritableSignal<number> = linkedSignal<number>(this.currentPage);

    public getPagesList: Signal<number[]> = computed<number[]>(() =>
        Array.from({ length: this.pages() }, (_: unknown, i: number) => i + 1)
    );

}

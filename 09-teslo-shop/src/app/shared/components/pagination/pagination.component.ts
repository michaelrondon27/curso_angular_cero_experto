import { Component, computed, input, InputSignal, Signal } from '@angular/core';

@Component({
    selector: 'app-pagination',
    imports: [],
    templateUrl: './pagination.component.html'
})
export class PaginationComponent {

    public currentPage: InputSignal<number> = input<number>(1);
    public pages      : InputSignal<number> = input<number>(0);

    public getPagesList: Signal<number[]> = computed<number[]>(() =>
        Array.from({ length: this.pages() }, (_: unknown, i: number) => i + 1)
    );

}

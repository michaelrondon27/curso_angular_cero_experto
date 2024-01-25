import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
    selector: 'shared-search-box',
    templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

    private debouncer: Subject<string> = new Subject<string>();
    private debouncerSubscription?: Subscription;

    @Input() public placeholder: string = '';

    @Output() public onValue: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit(): void {
        this.debouncerSubscription = this.debouncer
            .pipe(
                debounceTime(300)
            )
            .subscribe(value => {
                this.onValue.emit(value);
            });
    }

    onKeyPress(searchTerm: string): void {
        this.debouncer.next(searchTerm);
    }

    ngOnDestroy(): void {
        this.debouncerSubscription?.unsubscribe();
    }

}

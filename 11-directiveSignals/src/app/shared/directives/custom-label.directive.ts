import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

    private htmlElement?: ElementRef<HTMLElement>;

    constructor(
        private elementRef: ElementRef<HTMLElement>
    ) {
        this.htmlElement = this.elementRef;
    }

    ngOnInit(): void {

    }

}

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

    private _color: string = 'red';
    private htmlElement?: ElementRef<HTMLElement>;

    @Input() set color(value: string) {
        this._color = value;
        this.setStyle();
    }

    constructor(
        private elementRef: ElementRef<HTMLElement>
    ) {
        this.htmlElement = this.elementRef;
    }

    ngOnInit(): void {
        this.setStyle();
    }

    setStyle(): void {
        if (!this.htmlElement) {
            return;
        }

        this.htmlElement.nativeElement.style.color = this._color;
    }

}

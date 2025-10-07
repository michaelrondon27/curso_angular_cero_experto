import { AfterContentChecked, AfterContentInit, afterEveryRender, afterNextRender, AfterViewChecked, AfterViewInit, Component, DoCheck, effect, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

const log = (...messages: string[]) => {
    console.log(
        `${ messages[0] } %c${ messages.slice(1).join(', ') }`,
        'color: #BADA55'
    );
}

@Component({
    selector: 'app-home-page',
    imports: [],
    templateUrl: './home-page.component.html'
})
export default class HomePageComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit {

    constructor() {
        log("Constructor llamado.");
    }

    basicEffect = effect((onCleanup) => {
        log("effect", "Disparar efectos secundarios.");

        onCleanup(() => {
            log("onCleanup", "Se ejecuta cuando el efecto se va a destruir.");
        })
    });

    ngOnInit(): void {
        log("ngOnInit", "Runs once after Angular has initialized all the component's inputs.");
    }

    ngOnChanges(changes: SimpleChanges): void {
        log("ngOnChanges", "Runs every time the component's have changed.");
    }

    ngDoCheck(): void {
        log("ngDoCheck", "Runs every time this component is checked for changes.");
    }

    ngAfterContentInit(): void {
        log("ngAfterContentInit", "Runs once after the component's content has been initialized.");
    }

    ngAfterContentChecked(): void {
        log("ngAfterContentChecked", "Runs every time this component content has been checked for changes.");
    }

    ngAfterViewInit(): void {
        log("ngAfterViewInit", "Runs once after the component's conteviewnt has been initialized.");
    }

    ngAfterViewChecked(): void {
        log("ngAfterViewChecked", "Runs every time this component's view has been checked for changes.");
    }

    ngOnDestroy(): void {
        log("ngOnDestroy", "Runs once before the component is destroyed.");
    }

    afterNextRenderEffect = afterNextRender(() => {
        log("afterNextRender", "Runs once the next time that all components have been rendered to the DOM.");
    });

    afterEveryRenderEffect = afterEveryRender(() => {
        log("afterEveryRender", "Runs every time all components have been rendered to the DOM.");
    });

}

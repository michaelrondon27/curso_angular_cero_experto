import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

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
export default class HomePageComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnInit {

    constructor() {
        log('Constructor llamado');
    }

    ngOnInit(): void {
        log("ngOnInit", "Runs once after Angular has initialized all the component's inputs");
    }

    ngOnChanges(changes: SimpleChanges): void {
        log("ngOnChanges", "Runs every time the component's have changed");
    }

    ngDoCheck(): void {
        log("ngDoCheck", "Runs every time this component is checked for changes");
    }

    ngAfterContentInit(): void {
        log("ngAfterContentInit", "Runs once after the component's content has been initialized");
    }

    ngAfterContentChecked(): void {
        log("ngAfterContentChecked", "Runs every time this component's content has been checked for changes");
    }

    ngAfterViewInit(): void {
        log("ngAfterViewInit", "Runs once after the component's conteviewnt has been initialized");
    }

    ngAfterViewChecked(): void {
        log("ngAfterViewInit", "Runs every time this component's view has been checked for changes");
    }

}

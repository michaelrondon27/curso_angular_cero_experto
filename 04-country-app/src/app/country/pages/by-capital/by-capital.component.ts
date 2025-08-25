import { Component } from '@angular/core';

@Component({
    selector: 'app-by-capital',
    imports: [],
    templateUrl: './by-capital.component.html'
})
export default class ByCapitalComponent {

    onSearch(value: string): void {
        console.log(value)
    }

}

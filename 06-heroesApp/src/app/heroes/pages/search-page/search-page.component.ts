import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html'
})
export class SearchPageComponent {

    public searchInput: FormControl = new FormControl('');

}

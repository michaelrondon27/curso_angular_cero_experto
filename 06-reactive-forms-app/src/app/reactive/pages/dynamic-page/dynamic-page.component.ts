import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-dynamic-page',
    imports: [
        JsonPipe
    ],
    templateUrl: './dynamic-page.component.html'
})
export default class DynamicPageComponent { }

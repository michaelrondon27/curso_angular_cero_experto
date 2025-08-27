import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-not-found',
    imports: [],
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent {

    private _location: Location = inject(Location);

    goBack(): void {
        this._location.back();
    }

}

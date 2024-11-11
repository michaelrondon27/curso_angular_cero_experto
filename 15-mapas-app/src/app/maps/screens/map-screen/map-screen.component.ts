import { Component } from '@angular/core';

// Services
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export class MapScreenComponent {

    constructor(
        private placesService: PlacesService
    ) { }

}

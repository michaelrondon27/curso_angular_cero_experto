import { AfterViewInit, Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = 'pk.eyJ1IjoibXJvbmRvbjcyIiwiYSI6ImNqeGJyNnVhYzA3MWwzeXBlaHlzc3ZleG4ifQ.TwvVQCK3WtQFEVKGdEp1kg';

@Component({
    templateUrl: './full-screen-page.component.html',
    styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        const map = new mapboxgl.Map({
            center: [-74.5, 40],
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 9
        });
    }

}

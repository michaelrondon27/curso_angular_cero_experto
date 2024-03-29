import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
    templateUrl: './full-screen-page.component.html',
    styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {

    @ViewChild('map') public divMap?: ElementRef;

    ngAfterViewInit(): void {
        if (!this.divMap) {
            throw 'El elemento HTML no fue encontrado';
        }

        const map = new mapboxgl.Map({
            center: [-74.5, 40],
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 9
        });
    }

}

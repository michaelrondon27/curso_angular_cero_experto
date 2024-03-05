import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
    selector: 'maps-mini-map',
    templateUrl: './mini-map.component.html',
    styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {

    @Input() public lngLat?: [number, number];
    @ViewChild('map') public divMap?: ElementRef;

    ngAfterViewInit(): void {
        if (!this.divMap?.nativeElement) {
            throw "Map Div not found";
        }

        if (!this.lngLat) {
            throw "LngLat can't be null"
        }

        const map = new Map({
            center: this.lngLat,
            container: this.divMap.nativeElement,
            interactive: false,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 15
        });

        new Marker()
            .setLngLat(this.lngLat)
            .addTo(map);
    }

}

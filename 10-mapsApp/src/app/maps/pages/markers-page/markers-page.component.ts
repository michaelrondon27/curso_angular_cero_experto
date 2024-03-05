import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
    templateUrl: './markers-page.component.html',
    styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

    public currentLngLat: LngLat = new LngLat(-74.5, 40);
    public map?: Map;

    @ViewChild('map') public divMap?: ElementRef;

    ngAfterViewInit(): void {
        if (!this.divMap) {
            throw 'El elemento HTML no fue encontrado';
        }

        this.map = new Map({
            center: this.currentLngLat,
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 13
        });
    }

    addMarker(lngLat: LngLat, color: string): void {
        if (!this.map) {
            return;
        }

        const marker: Marker = new Marker({
            color,
            draggable: true
        })
            .setLngLat(lngLat)
            .addTo(this.map);
    }

    createMarker(): void {
        if (!this.map) {
            return;
        }

        const color: string = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
        const lngLat: LngLat = this.map.getCenter();

        this.addMarker(lngLat, color);
    }

}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
    color: string;
    marker: Marker;
}

@Component({
    templateUrl: './markers-page.component.html',
    styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

    public currentLngLat: LngLat = new LngLat(-74.10380784179445, 4.651165392795477);
    public map?: Map;
    public markers: MarkerAndColor[] = [];

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

        this.markers.push({
            color,
            marker
        });
    }

    createMarker(): void {
        if (!this.map) {
            return;
        }

        const color: string = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
        const lngLat: LngLat = this.map.getCenter();

        this.addMarker(lngLat, color);
    }

    deleteMarker(index: number): void {
        this.markers[index].marker.remove();
        this.markers.splice(index, 1);
    }

}

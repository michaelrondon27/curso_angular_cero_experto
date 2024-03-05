import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
    color: string;
    marker: Marker;
}

interface PlainMarker {
    color: string;
    lngLat: number[];
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

        this.readFromLocalStorage();
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

        this.saveToLocalStorage();

        marker.on('dragend', () => this.saveToLocalStorage());
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

    flyTo(marker: Marker): void {
        this.map?.flyTo({
            center: marker.getLngLat(),
            zoom: 14
        })
    }

    readFromLocalStorage(): void {
        const plainMarkersString: string = localStorage.getItem('plainMarkers') ?? '[]';

        const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

        plainMarkers.forEach( ({color, lngLat}) => {
            const [lng, lat] = lngLat;
            const coords = new LngLat(lng, lat);

            this.addMarker(coords, color);
        });
    }

    saveToLocalStorage(): void {
        const plainMarkers: PlainMarker[] = this.markers.map(({color, marker}) => {
            return {
                color,
                lngLat: marker.getLngLat().toArray()
            }
        });

        localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
    }

}

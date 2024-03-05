import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
    templateUrl: './zoom-range-page.component.html',
    styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent  implements AfterViewInit, OnDestroy {

    public currentLngLat: LngLat = new LngLat(-74.5, 40);
    public map?: Map;
    public zoom: number = 10;

    @ViewChild('map') public divMap?: ElementRef;

    ngAfterViewInit(): void {
        if (!this.divMap) {
            throw 'El elemento HTML no fue encontrado';
        }

        this.map = new Map({
            center: this.currentLngLat,
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: this.zoom
        });

        this.mapListeners();
    }

    ngOnDestroy(): void {
        this.map?.remove();
    }

    mapListeners(): void {
        if (!this.map) {
            throw 'Mapa no inicializado';
        }

        this.map.on('zoom', () => {
            this.zoom = this.map!.getZoom();
        });

        this.map.on('zoomend', () => {
            if (this.map!.getZoom() < 18) {
                return;
            }

            this.map!.zoomTo(18);
        });

        this.map.on('move', () => {
            this.currentLngLat = this.map!.getCenter();
        });
    }

    zoomChanged(value: string): void {
        this.zoom = Number(value);

        this.map?.zoomTo(this.zoom);
    }

    zoomIn(): void {
        this.map?.zoomIn();
    }

    zoomOut(): void {
        this.map?.zoomOut();
    }

}

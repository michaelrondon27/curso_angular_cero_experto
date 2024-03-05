import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
    templateUrl: './zoom-range-page.component.html',
    styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent  implements AfterViewInit {

    public map?: Map;
    public zoom: number = 10;

    @ViewChild('map') public divMap?: ElementRef;

    ngAfterViewInit(): void {
        if (!this.divMap) {
            throw 'El elemento HTML no fue encontrado';
        }

        this.map = new Map({
            center: [-74.5, 40],
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: this.zoom
        });

        this.mapListeners();
    }

    mapListeners(): void {
        if (!this.map) {
            throw 'Mapa no inicializado';
        }

        this.map.on('zoom', (ev) => {
            this.zoom = this.map!.getZoom();
        });

        this.map.on('zoomend', (ev) => {
            if (this.map!.getZoom() < 18) {
                return;
            }

            this.map!.zoomTo(18);
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

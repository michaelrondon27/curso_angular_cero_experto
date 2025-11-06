import { AfterViewInit, Component, effect, EffectRef, ElementRef, signal, Signal, viewChild, WritableSignal } from '@angular/core';
import { DecimalPipe, JsonPipe } from '@angular/common';
import mapboxgl, { LngLat } from 'mapbox-gl';

// Environments
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

interface LngLatCustom {
    lng: number;
    lat: number;
}

@Component({
    selector: 'app-fullscreen-map-page',
    imports: [
        DecimalPipe,
        JsonPipe
    ],
    templateUrl: './fullscreen-map-page.component.html',
    styles: `
        div {
            height: calc(100vh - 64px);
            width: 100vw;
        }

        #controls {
            background-color: white;
            border: 1px solid #E2E8F0;
            border-radius: 5px;
            bottom: 25px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            padding: 10px;
            position: fixed;
            right: 20px;
            width: 250px;
            z-index: 9999;
        }
    `
})
export default class FullscreenMapPageComponent implements AfterViewInit {

    public coordinates: WritableSignal<LngLatCustom> = signal<LngLatCustom>({ lat: 40.4172, lng: -3.7045 });
    public map        : WritableSignal<mapboxgl.Map | null> = signal<mapboxgl.Map | null>(null);
    public zoom       : WritableSignal<number> = signal<number>(14);

    public divElement: Signal<ElementRef | undefined> = viewChild<ElementRef>('map');

    public zoomEffect: EffectRef = effect(() => {
        if (!this.map()) {
            return;
        }

        this.map()!.setZoom(this.zoom());
    });

    async ngAfterViewInit(): Promise<void> {
        if (!this.divElement()?.nativeElement) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, 80));

        const element = this.divElement()!.nativeElement;
        const { lat, lng } = this.coordinates();

        const map = new mapboxgl.Map({
            center: [lng, lat],
            container: element,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: this.zoom()
        });

        this.mapListeners(map);
    }

    mapListeners(map: mapboxgl.Map): void {
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.ScaleControl());

        map.on('moveend', (event) => {
            const center: LngLat = map.getCenter();

            this.coordinates.set(center);
        });

        map.on('zoomend', (event) => {
            const newZoom: number = event.target.getZoom();

            this.zoom.set(newZoom);
        });

        this.map.set(map);
    }

}

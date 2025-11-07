import { AfterViewInit, Component, ElementRef, input, InputSignal, Signal, viewChild } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

// Environments
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
    selector: 'app-mini-map',
    imports: [],
    templateUrl: './mini-map.component.html',
    styles: `
        div {
            height: 260px;
            width: 100%;
        }
    `
})
export class MiniMapComponent implements AfterViewInit {

    public lngLat: InputSignal<LngLatLike> = input.required<LngLatLike>();
    public zoom  : InputSignal<number> = input<number>(15);

    public divElement: Signal<ElementRef | undefined> = viewChild<ElementRef>('map');

    async ngAfterViewInit(): Promise<void> {
        if (!this.divElement()?.nativeElement) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, 80));

        const element = this.divElement()!.nativeElement;

        const map = new mapboxgl.Map({
            center: this.lngLat(),
            container: element,
            interactive: false,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: this.zoom()
        });

        new mapboxgl.Marker().setLngLat(this.lngLat()).addTo(map);
    }

}

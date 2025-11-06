import { AfterViewInit, Component, ElementRef, Signal, signal, viewChild, WritableSignal } from '@angular/core';
import mapboxgl, { LngLat, Marker } from 'mapbox-gl';
import { v4 as UuidV4 } from 'uuid';

// Environments
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

interface MarkerCustom {
    id          : string;
    mapboxMarker: Marker;
}

@Component({
    selector: 'app-markers-page',
    imports: [],
    templateUrl: './markers-page.component.html'
})
export default class MarkersPageComponent implements AfterViewInit {

    public map    : WritableSignal<mapboxgl.Map | null> = signal<mapboxgl.Map | null>(null);
    public markers: WritableSignal<MarkerCustom[]> = signal<MarkerCustom[]>([]);

    public divElement: Signal<ElementRef | undefined> = viewChild<ElementRef>('map');

    async ngAfterViewInit(): Promise<void> {
        if (!this.divElement()?.nativeElement) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, 80));

        const element = this.divElement()!.nativeElement;

        const map = new mapboxgl.Map({
            center: [-3.7045, 40.4172],
            container: element,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 14
        });

        this._mapListeners(map);
    }

    private _mapClick(event: mapboxgl.MapMouseEvent): void {
        if (!this.map()) {
            return;
        }

        const color : string = '#xxxxxx'.replace(/x/g, (y) => ((Math.random() * 16) | 0).toString(16));
        const coords: LngLat = event.lngLat;
        const marker: Marker = new mapboxgl.Marker({ color })
            .setLngLat(coords)
            .addTo(this.map()!);

        this.markers.update((values: MarkerCustom[]) => [
            {
                id: UuidV4(),
                mapboxMarker: marker
            },
            ...values
        ]);
    }

    private _mapListeners(map: mapboxgl.Map): void {
        map.on('click', (event) => this._mapClick(event));

        this.map.set(map);
    }

}

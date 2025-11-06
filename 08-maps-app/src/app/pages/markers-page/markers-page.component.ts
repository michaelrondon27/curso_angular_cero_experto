import { AfterViewInit, Component, ElementRef, Signal, signal, viewChild, WritableSignal } from '@angular/core';
import mapboxgl from 'mapbox-gl';

// Environments
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
    selector: 'app-markers-page',
    imports: [],
    templateUrl: './markers-page.component.html'
})
export default class MarkersPageComponent implements AfterViewInit {

    public map: WritableSignal<mapboxgl.Map | null> = signal<mapboxgl.Map | null>(null);

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

        const marker = new mapboxgl.Marker({})
            .setLngLat([-3.7045, 40.4172])
            .addTo(map);

        this.mapListeners(map);
    }

    mapListeners(map: mapboxgl.Map): void {
        this.map.set(map);
    }

}

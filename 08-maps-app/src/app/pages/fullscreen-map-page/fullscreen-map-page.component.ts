import { AfterViewInit, Component, ElementRef, Signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';

// Environments
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
    selector: 'app-fullscreen-map-page',
    imports: [],
    templateUrl: './fullscreen-map-page.component.html',
    styles: `
        div {
            height: calc(100vh - 64px);
            width: 100vw;
        }
    `
})
export default class FullscreenMapPageComponent implements AfterViewInit {

    public divElement: Signal<ElementRef | undefined> = viewChild<ElementRef>('map');

    async ngAfterViewInit(): Promise<void> {
        if (!this.divElement()?.nativeElement) {
            return;
        }
        console.log(environment)

        await new Promise((resolve) => setTimeout(resolve, 80));

        const element = this.divElement()!.nativeElement

        const map = new mapboxgl.Map({
            center: [-74.5, 40],
            container: element,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 9
        });
    }

}

import { Component, signal, WritableSignal } from '@angular/core';
import { v4 as uuid } from 'uuid';

// Components
import { MiniMapComponent } from '../../maps/components/mini-map/mini-map.component';

interface HouseProperty {
    description: string;
    id         : string;
    lngLat     : { lng: number; lat: number };
    name       : string;
    price      : number;
    tags       : string[];
}

@Component({
    selector: 'app-houses-page',
    imports: [
        MiniMapComponent
    ],
    templateUrl: './houses-page.component.html'
})
export default class HousesPageComponent {

    public houses: WritableSignal<HouseProperty[]> = signal<HouseProperty[]>([
        {
            description: 'Un refugio tranquilo con vistas panorámicas al mar y jardines exuberantes.',
            id: uuid(),
            lngLat: { lng: -122.3893, lat: 37.7785 },
            name: 'Villa Serenidad',
            price: 500_000,
            tags: ['Villa', 'Mar', 'Jardines']
        },
        {
            description: 'Una casa luminosa y acogedora con amplias terrazas y piscina privada.',
            id: uuid(),
            lngLat: { lng: -118.2400, lat: 34.0738 },
            name: 'Casa del Sol',
            price: 750_000,
            tags: ['Casa', 'Sol', 'Terrazas']
        },
        {
            description: 'Elegante propiedad con acabados de lujo y un diseño arquitectónico moderno.',
            id: uuid(),
            lngLat: { lng: -117.8828, lat: 33.8002 },
            name: 'Residencia Esmeralda',
            price: 1_200_000,
            tags: ['Casa', 'Esmeralda', 'Acabados']
        },
        {
            description: 'Encantadora hacienda con acceso directo al lago y un entorno natural impresionante.',
            id: uuid(),
            lngLat: { lng: -117.1572, lat: 32.7075 },
            name: 'Hacienda del Lago',
            price: 950_000,
            tags: ['Casa', 'Lago', 'Hacienda'],
        }
    ]);

}

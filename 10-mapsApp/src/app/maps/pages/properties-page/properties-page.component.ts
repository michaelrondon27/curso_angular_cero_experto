import { Component } from '@angular/core';

interface House {
    description: string;
    lngLat: [number, number];
    title: string;
}

@Component({
    templateUrl: './properties-page.component.html',
    styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

    public houses: House[] = [
        {
            description: 'Bella propiedad en Katana, Canadá',
            lngLat: [ -75.92722289474008, 45.280015511264466],
            title: 'Casa residencial, Canadá'
        },
        {
            description: 'Hermosa casa de playa en Acapulco, México',
            lngLat: [ -99.91287720907991, 16.828940930185748],
            title: 'Casa de playa, México'
        },
        {
            description: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
            lngLat: [ -58.430166677283445, -34.57150108832866 ],
            title: 'Apartamento, Argentina'
        },
        {
            description: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
            lngLat: [ -3.7112735618380177, 40.42567285425766 ],
            title: 'Local comercial, España'
        },
    ];

}

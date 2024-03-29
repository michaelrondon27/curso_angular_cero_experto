import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibXJvbmRvbjcyIiwiYSI6ImNqeGJyNnVhYzA3MWwzeXBlaHlzc3ZleG4ifQ.TwvVQCK3WtQFEVKGdEp1kg';

// Components
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

// Layout
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';

// Pages
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';

// Routes
import { MapsRoutingModule } from './maps-routing.module';

@NgModule({
    declarations: [
        FullScreenPageComponent,
        MapsLayoutComponent,
        MiniMapComponent,
        MarkersPageComponent,
        PropertiesPageComponent,
        ZoomRangePageComponent
    ],
    imports: [
        CommonModule,
        CounterAloneComponent,
        MapsRoutingModule,
        SideMenuComponent
    ]
})
export class MapsModule { }

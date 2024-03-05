import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibXJvbmRvbjcyIiwiYSI6ImNqeGJyNnVhYzA3MWwzeXBlaHlzc3ZleG4ifQ.TwvVQCK3WtQFEVKGdEp1kg';

// Components
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

// Layout
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';

// Pages
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';

// Routes
import { MapsRoutingModule } from './maps-routing.module';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

@NgModule({
    declarations: [
        FullScreenPageComponent,
        MapsLayoutComponent,
        MiniMapComponent,
        MarkersPageComponent,
        PropertiesPageComponent,
        SideMenuComponent,
        ZoomRangePageComponent
    ],
    imports: [
        CommonModule,
        MapsRoutingModule
    ]
})
export class MapsModule { }

import { NgModule } from '@angular/core';

// Components
import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view.component';

// Screens
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
@NgModule({
    declarations: [
        LoadingComponent,
        MapScreenComponent,
        MapViewComponent
    ],
    exports: [
        MapScreenComponent
    ]
})
export class MapsModule { }

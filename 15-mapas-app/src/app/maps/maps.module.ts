import { NgModule } from '@angular/core';

// Components
import { MapScreenComponent } from './screens/map-screen/map-screen.component';

@NgModule({
    declarations: [
        MapScreenComponent
    ],
    exports: [
        MapScreenComponent
    ]
})
export class MapsModule { }

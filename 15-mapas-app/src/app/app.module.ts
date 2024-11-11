import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Modules
import { MapsModule } from './maps/maps.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MapsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Routes
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

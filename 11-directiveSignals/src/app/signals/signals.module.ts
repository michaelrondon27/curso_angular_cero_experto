import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Layout
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';

// Pages
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

// Routes
import { SignalsRoutingModule } from "./signals-routing.module";

@NgModule({
    declarations: [
        CounterPageComponent,
        SignalsLayoutComponent,
        PropertiesPageComponent,
        UserInfoPageComponent
    ],
    imports: [
        CommonModule,
        SignalsRoutingModule
    ]
})
export class  SignalsModule { }

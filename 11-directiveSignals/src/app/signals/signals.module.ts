import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Components
import { SideMenuComponent } from './components/side-menu/side-menu.component';

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
        PropertiesPageComponent,
        SideMenuComponent,
        SignalsLayoutComponent,
        UserInfoPageComponent
    ],
    imports: [
        CommonModule,
        SignalsRoutingModule,
        RouterModule
    ]
})
export class  SignalsModule { }

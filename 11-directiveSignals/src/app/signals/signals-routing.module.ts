import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Layout
import { SignalsLayoutComponent } from "./layout/signals-layout/signals-layout.component";

// Pages
import { CounterPageComponent } from "./pages/counter-page/counter-page.component";
import { PropertiesPageComponent } from "./pages/properties-page/properties-page.component";
import { UserInfoPageComponent } from "./pages/user-info-page/user-info-page.component";

const routes: Routes = [
    {
        path: '',
        component: SignalsLayoutComponent,
        children: [
            {
                path: 'counter',
                component: CounterPageComponent
            },
            {
                path: 'user-info',
                component: UserInfoPageComponent
            },
            {
                path: 'properties',
                component: PropertiesPageComponent
            },
            {
                path: '**',
                redirectTo: 'counter'
            }
        ]
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class SignalsRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";

// auth/
const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent
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
export class AuthRoutingModule { }

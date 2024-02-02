import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { SelectorPageComponent } from "./pages/selector-page/selector-page.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'selector',
                component: SelectorPageComponent
            },
            {
                path: '**',
                redirectTo: 'selector'
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
export class CountriesRoutingModule { }

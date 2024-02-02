import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'selector',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
    },
    {
        path: '**',
        redirectTo: 'selector'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }

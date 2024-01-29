import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

// heroes/
const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            {
                path: 'new-hero',
                component: NewPageComponent
            },
            {
                path: 'search',
                component: SearchPageComponent
            },
            {
                path: 'edit/:id',
                component: NewPageComponent
            },
            {
                path: 'list',
                component: ListPageComponent
            },
            {
                path: ':id',
                component: HeroPageComponent
            },
            {
                path: '**',
                component: ListPageComponent
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
export class HeroesRoutingModule { }

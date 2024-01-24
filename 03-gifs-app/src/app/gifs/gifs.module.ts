import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
    declarations: [
        CardListComponent,
        HomePageComponent,
        SearchBoxComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GifsModule { }

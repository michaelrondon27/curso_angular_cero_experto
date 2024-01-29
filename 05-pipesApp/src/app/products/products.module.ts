import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ToggleCasePipe } from './pipes/toggle-case.pipe';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

@NgModule({
    declarations: [
        BasicsPageComponent,
        NumbersPageComponent,
        OrderComponent,
        ToggleCasePipe,
        UncommonPageComponent
    ],
    imports: [
        CommonModule,
        PrimeNgModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule { }

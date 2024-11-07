import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Layouts
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

// Routes
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
    declarations: [
        DashboardLayoutComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Layouts
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

// Pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

// Routes
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        AuthLayoutComponent,
        LoginPageComponent,
        RegisterPageComponent
    ],
    imports: [
        AuthRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateAuthGuard, CanMatchAuthGuard } from './auth/guards/auth.guard';
import { CanActivatePublicGuard, CanMatchPublicGuard } from './auth/guards/public.guard';

import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canActivate: [CanActivatePublicGuard],
        canMatch: [CanMatchPublicGuard]
    },
    {
        path: 'heroes',
        loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
        canActivate: [CanActivateAuthGuard],
        canMatch: [CanMatchAuthGuard]
    },
    {
        path: '404',
        component: Error404PageComponent
    },
    {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404'
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

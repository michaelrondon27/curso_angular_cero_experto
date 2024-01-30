import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'sign-up',
                component: RegisterPageComponent
            },
            {
                path: '**',
                redirectTo: 'sign-up'
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
export class AuthRoutingModule { }

import { Routes } from '@angular/router';

// Components
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-pagecomponent';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: 'dragonball',
        component: DragonballPageComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

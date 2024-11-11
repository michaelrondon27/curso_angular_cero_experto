import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    standalone: true,
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule
    ],
    templateUrl: './material.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MaterialComponent {

}

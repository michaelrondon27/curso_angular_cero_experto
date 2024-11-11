import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Components
import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
    standalone: true,
    imports: [
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule
    ],
    templateUrl: './material.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MaterialComponent {

    constructor(
        private matBottomSheet: MatBottomSheet
    ) { }

    openBottomSheet(): void {
        this.matBottomSheet.open(OptionsBottomSheetComponent);
    }

}

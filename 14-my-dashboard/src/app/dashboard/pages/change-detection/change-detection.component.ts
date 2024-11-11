import { ChangeDetectionStrategy, Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TitleComponent } from '@shared/title/title.component';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-title [title]="currentFramework()" />

        <pre>{{ frameworkAsSignal() | json }}</pre>

        <pre>{{ frameworkAsProperty | json }}</pre>
    `,
    styles: ``
})
export default class ChangeDetectionComponent {

    public frameworkAsProperty: { name: string; releaseDate: number; } = { name: 'Angular', releaseDate: 2016 };
    public frameworkAsSignal: WritableSignal<{ name: string; releaseDate: number; }> = signal<{ name: string; releaseDate: number; }>({ name: 'Angular', releaseDate: 2016 });

    public currentFramework: Signal<string> = computed<string>(() => `Change Detection - ${ this.frameworkAsSignal().name }`);

    constructor() {
        setTimeout(() => {
            // this.frameworkAsProperty.name = 'React';
            this.frameworkAsSignal.update(value => ({
                ...value,
                name: 'React'
            }))
        }, 3000);
    }

}

import { Component } from '@angular/core';

// Components
import { TitleComponent } from '@shared/title/title.component';

@Component({
    standalone: true,
    imports: [
        TitleComponent
    ],
    template: `
        <app-title title="View Transition 2" />

        <section class="flex justify-end">
            <img
                alt="Picsum"
                height="300"
                srcset="https://picsum.photos/id/237/200/300"
                style="view-transition-name: hero1"
                width="200"
            />

            <div
                class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
                style="view-transition-name= hero2"
            ></div>
        </section>
    `,
    styles: ``
})
export default class ViewTransition2Component {

}

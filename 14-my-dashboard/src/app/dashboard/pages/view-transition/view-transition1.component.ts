import { Component } from '@angular/core';

// Components
import { TitleComponent } from '@shared/title/title.component';

@Component({
    standalone: true,
    imports: [
        TitleComponent
    ],
    template: `
        <app-title title="View Transition 1" />

        <section class="flex justify-start">
            <img
                alt="Picsum"
                height="300"
                srcset="https://picsum.photos/id/237/200/300"
                style="view-transition-name: hero1"
                width="200"
            />

            <div
                class="bg-blue-500 w-56 h-56"
                style="view-transition-name= hero2"
            ></div>
        </section>
    `,
    styles: ``
})
export default class ViewTransition1Component {

}

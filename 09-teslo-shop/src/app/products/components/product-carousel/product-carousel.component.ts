import { AfterViewInit, Component, ElementRef, input, InputSignal, Signal, viewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Pipes
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
    selector: 'product-carousel',
    imports: [
        ProductImagePipe
    ],
    templateUrl: './product-carousel.component.html',
    styles: `
        .swiper {
            height: 100%;
            width: 100%;
        }
    `
})
export class ProductCarouselComponent implements AfterViewInit {

    public images: InputSignal<string[]> = input.required<string[]>();

    public swiperDiv: Signal<ElementRef<any>> = viewChild.required<ElementRef>('swiperDiv');

    ngAfterViewInit(): void {
        const element: any = this.swiperDiv().nativeElement;

        if (!element) {
            return;
        }

        const swiper = new Swiper(element, {
            direction: 'horizontal',
            loop: true,
            modules: [
                Navigation,
                Pagination
            ],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            }
        });
    }

}

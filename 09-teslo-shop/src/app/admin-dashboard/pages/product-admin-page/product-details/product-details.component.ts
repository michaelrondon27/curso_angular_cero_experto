import { Component, inject, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Components
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';

// Interfaces
import { Product } from '@products/interfaces/product.interface';

// Utils
import { FormUtils } from '@utils/form-utils';

@Component({
    selector: 'product-details',
    imports: [
        ProductCarouselComponent,
        ReactiveFormsModule
    ],
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    private _formBuilder: FormBuilder = inject(FormBuilder);

    public productForm: WritableSignal<FormGroup> = signal<FormGroup>(this._formBuilder.group({
        description: ['', [Validators.required]],
        gender: ['men', [Validators.pattern(/men|women|kid|unisex/), Validators.required]],
        images: [[]],
        price: [0, [Validators.min(0), Validators.required]],
        sizes: [['']],
        slug: ['', [Validators.pattern(FormUtils.slugPattern()), Validators.required]],
        stock: [0, [Validators.min(0), Validators.required]],
        tags: [''],
        title: ['', [Validators.required]]
    }));
    public sizes      : WritableSignal<string[]> = signal<string[]>(['XS', 'S', 'M', 'L', 'XL', 'XXL']);

    public product: InputSignal<Product> = input.required<Product>();

    ngOnInit(): void {
        this._setFormValue(this.product());
    }

    onSubmit(): void {
        console.log(this.productForm().value);
    }

    private _setFormValue(formLike: Partial<Product>) {
        this.productForm().reset(formLike);
        this.productForm().patchValue({ tags: formLike.tags?.join(',') });
    }

}

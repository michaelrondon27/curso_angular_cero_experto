import { Component, inject, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

// Components
import { FormErrorLabel } from '@shared/components/form-error-label/form-error-label.component';
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';

// Interfaces
import { Product } from '@products/interfaces/product.interface';

// Services
import { ProductsService } from '@products/services/products.service';

// Utils
import { FormUtils } from '@utils/form-utils';

@Component({
    selector: 'product-details',
    imports: [
        FormErrorLabel,
        ProductCarouselComponent,
        ReactiveFormsModule
    ],
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    private _formBuilder    : FormBuilder = inject(FormBuilder);
    private _productsService: ProductsService = inject(ProductsService);
    private _router         : Router = inject(Router);

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
    public wasSaved   : WritableSignal<boolean> = signal<boolean>(false);

    public product: InputSignal<Product> = input.required<Product>();

    ngOnInit(): void {
        this._setFormValue(this.product());
    }

    onSizeClicked(size: string): void {
        const currentSizes: string[] = this.productForm().value.sizes ?? [];

        if (currentSizes.includes(size)) {
            currentSizes.splice(currentSizes.indexOf(size), 1);
        } else {
            currentSizes.push(size);
        }

        this.productForm().patchValue({ sizes: currentSizes });
    }

    async onSubmit(): Promise<void> {
        const isValid: boolean = this.productForm().valid;

        this.productForm().markAllAsTouched();

        if (!isValid) {
            return;
        }

        const formValue = this.productForm().value;
        const productLike: Partial<Product> = {
            ...formValue,
            tags: formValue.tags.toLowerCase().split(',').map((tag: string) => tag.trim()) ?? [ ]
        };

        if (this.product().id === 'new') {
            const product: Product = await firstValueFrom(this._productsService.createProduct(productLike));

            this._router.navigate(['/admin/products', product.id]);
        } else {
            await firstValueFrom(this._productsService.updateProduct(this.product().id, productLike));
        }

        this.wasSaved.set(true);

        setTimeout(() => {
            this.wasSaved.set(false);
        }, 3000);
    }

    private _setFormValue(formLike: Partial<Product>) {
        this.productForm().reset(formLike);
        this.productForm().patchValue({ tags: formLike.tags?.join(',') });
    }

}

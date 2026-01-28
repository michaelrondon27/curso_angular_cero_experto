import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

// Environments
import { environment } from 'src/environments/environment';

// Interfaces
import {
    Gender,
    GetProudctsParams,
    Product,
    ProductsResponse
} from '@products/interfaces/product.interface';
import { User } from '@auth/interfaces/user.interface';

const baseUrl: string = environment.baseUrl;

const emptyProduct: Product = {
    description: '',
    gender: Gender.men,
    id: 'new',
    images: [],
    price: 0,
    sizes: [],
    slug: '',
    stock: 0,
    tags: [],
    title: '',
    user: {} as User
}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private _httpClient: HttpClient = inject(HttpClient);

    private _productCache: Map<string, Product> = new Map<string, Product>();
    private _productsCache: Map<string, ProductsResponse> = new Map<string, ProductsResponse>();

    createProduct(productLike: Partial<Product>): Observable<Product> {
        return this._httpClient.post<Product>(`${ baseUrl }/products`, productLike)
            .pipe(tap((product: Product) => this._updateProductCache(product)))
    }

    getProductById(id: string): Observable<Product> {
        if (id === 'new') {
            return of(emptyProduct);
        }

        if (this._productCache.has(id)) {
            return of(this._productCache.get(id)!);
        }

        return this._httpClient.get<Product>(`${ baseUrl }/products/${ id }`).pipe(
            tap((resp: Product) => this._productCache.set(id, resp))
        );
    }

    getProductByIdSlug(idSlug: string): Observable<Product> {
        if (this._productCache.has(idSlug)) {
            return of(this._productCache.get(idSlug)!);
        }

        return this._httpClient.get<Product>(`${ baseUrl }/products/${ idSlug }`).pipe(
            tap((resp: Product) => this._productCache.set(idSlug, resp))
        );
    }

    getProducts(params: GetProudctsParams): Observable<ProductsResponse> {
        const  { gender = '', limit = 9, offset = 0 } = params;
        const key: string = `${ limit }-${ offset }-${ gender }`;

        if (this._productsCache.has(key)) {
            return of(this._productsCache.get(key)!);
        }

        return this._httpClient.get<ProductsResponse>(`${ baseUrl }/products`, {
            params: {
                gender,
                limit,
                offset
            }
        }).pipe(
            tap((resp: ProductsResponse) => this._productsCache.set(key, resp))
        );
    }

    updateProduct(id: string, productLike: Partial<Product>): Observable<Product> {
        return this._httpClient.patch<Product>(`${ baseUrl }/products/${ id }`, productLike)
            .pipe(tap((product: Product) => this._updateProductCache(product)));
    }

    private _updateProductCache(product: Product): void {
        const productId: string = product.id;

        this._productCache.set(productId, product);
        this._productsCache.forEach((productsResponse: ProductsResponse) => {
            productsResponse.products = productsResponse.products.map((currentProdcuct: Product) => {
                return currentProdcuct.id === productId ? product : currentProdcuct;
            });
        });
    }

}

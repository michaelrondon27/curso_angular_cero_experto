import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

// Environments
import { environment } from 'src/environments/environment';

// Interfaces
import {
    GetProudctsParams,
    Product,
    ProductsResponse
} from '@products/interfaces/product.interface';

const baseUrl: string = environment.baseUrl;

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private _httpClient: HttpClient = inject(HttpClient);

    private _productsCache: Map<string, ProductsResponse> = new Map<string, ProductsResponse>();

    getProductByIdSlug(idSlug: string): Observable<Product> {
        return this._httpClient.get<Product>(`${ baseUrl }/products/${ idSlug }`);
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

}

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// Environments
import { environment } from 'src/environments/environment';

// Interfaces
import {
    GetProuctsParams,
    Product,
    ProductsResponse
} from '@products/interfaces/product.interface';

const baseUrl: string = environment.baseUrl;

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private _httpClient: HttpClient = inject(HttpClient);

    getProductByIdSlug(idSlug: string): Observable<Product> {
        return this._httpClient.get<Product>(`${ baseUrl }/products/${ idSlug }`);
    }

    getProducts(params: GetProuctsParams): Observable<ProductsResponse> {
        const  { gender = '', limit = 9, offset = 0 } = params;

        return this._httpClient.get<ProductsResponse>(`${ baseUrl }/products`, {
            params: {
                gender,
                limit,
                offset
            }
        });
    }

}

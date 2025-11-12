import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// Environments
import { environment } from 'src/environments/environment';

// Interfaces
import {
    GetProuctsParams,
    ProductsResponse
} from '@products/interfaces/product.interface';

const baseUrl: string = environment.baseUrl;

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private _httpClient: HttpClient = inject(HttpClient);

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
